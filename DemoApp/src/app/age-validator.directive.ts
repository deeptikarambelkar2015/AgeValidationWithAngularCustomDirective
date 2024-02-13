import { Directive ,Input} from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appAgeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})
export class AgeValidatorDirective implements Validator {

  constructor() { }

  @Input("appAgeValidator") ageLimitMin: number | any = 0

  validate(control: AbstractControl): ValidationErrors | null
  {
    
    let currentValue = control.value;
    let isValid = currentValue > this.ageLimitMin && currentValue<61;

    if (isValid)
    {
      return null; //valid
    }
    else
    {
      return { acceptableAge: { valid: false } }; //indicates invalid
    }
  }
}
