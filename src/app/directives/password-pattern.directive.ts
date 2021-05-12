import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service'

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true}]
})
export class PasswordPatternDirective implements Validator {

  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.passwordValidator()(control);
  }

}
