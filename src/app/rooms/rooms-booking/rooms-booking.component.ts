import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  imports: [CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent {

  router: ActivatedRoute = inject(ActivatedRoute);
  //id$ = this.router.params.pipe(map((param)=>{return param['id']}));
  id$ = this.router.paramMap.pipe(map((param)=>{return param.get('id')}));
}
