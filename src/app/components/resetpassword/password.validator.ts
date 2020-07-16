import { AbstractControl } from '@angular/forms';

export class PassWordValidator {
  
  static matchPwds(control: AbstractControl) {
    let newPwd2 = control.get('password');
    let confirmPwd2 = control.get('confirmPwd');
    if(newPwd2.value !== confirmPwd2.value){
      return { pwdsDontMatch: true };
    }
    return null;
  }
}