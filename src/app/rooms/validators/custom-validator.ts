import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static validateName (control: AbstractControl) {
        const value: string = control.value as string;
        if(value.includes('test')){
            return{
                invalidNmae: null
            }
        }
        return null;
    }

    static ValidateSpecialChar(chars: string[]){
        return (control: AbstractControl) => {
        const value = control.value as string;
        if(chars.some(char => value.includes(char))){
            return {
                invalidSpecialChar: true
            }
        }
        return null;
    }}

    static validDate(control: FormGroup){
        const checkinDate = new Date(control.get('checkinDate')?.value);
        const checkoutDate = new Date(control.get('checkoutDate')?.value);
        const dateDiff = (checkoutDate.getTime() - checkinDate.getTime())/(1000 * 60 * 60 * 24);
        if(dateDiff <= 0){
            control.get('checkoutDate')?.setErrors({invalidDate: true});
            return {
                invalidDate: true
            }
        }
        return null;
    }
}
