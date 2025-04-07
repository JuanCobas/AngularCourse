import { CommonModule } from '@angular/common';
import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BookingService } from './booking.service';
import { CustomValidator } from '../validators/custom-validator';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-rooms-booking',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatExpansionModule, MatIconModule, MatCheckboxModule, MatDialogModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css',
  providers: [provideNativeDateAdapter()]
})
export class RoomsBookingComponent implements OnInit, OnChanges {

  router: ActivatedRoute = inject(ActivatedRoute);
  //id$ = this.router.params.pipe(map((param)=>{return param['id']}));
  id$ = this.router.paramMap.pipe(map((param) => { return param.get('id') }));
  dataID: string | null = '';
  idSub = this.id$.subscribe((data) => { this.dataID = data })
  constructor(private configService: ConfigService) {

  }

  bookingService: BookingService = inject(BookingService);

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  bookingForms!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  id!: string | null;
  ngOnInit(): void {
   
   
    
    this.bookingForms = this.fb.group({
      roomId: new FormControl({ value: this.id, disabled: true }),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', { updateOn: 'blur' , validators: [Validators.minLength(5), CustomValidator.validateName, CustomValidator.ValidateSpecialChar(['!', '*'])]}],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([this.fb.group({guestName: new FormControl('', [Validators.required]), age: new FormControl('', [Validators.required])})]),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]}),
      guestList: []
    }, {validators: [CustomValidator.validDate]})
    this.id$.subscribe(data => {this.id = data; this.bookingForms.patchValue({roomId: data})}) ///THIS MAY BE BAD!!!!
    //this.bookingForms.valueChanges.subscribe(data => console.log(data));
    //this.bookingForms.valueChanges.subscribe(data => this.bookingService.bookRoom(data).subscribe(data=> {}))

    this.bookingForms.valueChanges.pipe(mergeMap(data => this.bookingService.bookRoom(data))).subscribe(data => console.log(data))
    
  }
  
  addBooking(): void {
    console.log(this.bookingForms.getRawValue())
    // this.bookingService.bookRoom(this.bookingForms.getRawValue()).subscribe(data => {console.log(data)});
    this.bookingForms.reset({
      roomId: this.id,
      guestEmail: 'test@test',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [{guestName: '', age: ''}],
      tnc: false,
      guestList: []
    });
  }

  get guests() {
   return this.bookingForms.get('guests') as FormArray;
  }
  addGuest(){
    this.guests.push(this.fb.group({guestName: new FormControl('', [Validators.required]), age: new FormControl('')}))
  }

  addPassport(){
    this.bookingForms.addControl('passport', new FormControl(''))
  }

  deletePassport(){
    if(this.bookingForms.get('passport')){
      this.bookingForms.removeControl('passport');
    }
  }
  deleteGuest(pos?: number){
    if(pos !== undefined){
      this.guests.removeAt(pos);
      console.log('removed');
      return
    }
    const position = this.guests.length;
    if(position > 0){
      this.guests.removeAt(position - 1);
    }
    
  }
}