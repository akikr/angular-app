import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, FormGroup } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appPasswordMatcher]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatcherDirective, multi: true}]
})
export class PasswordMatcherDirective implements Validator {
  @Input('appPasswordMatcher') MatchPassword: string[] = [];

  constructor(private customValidator: CustomvalidationService) { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidator.passwordMatcher(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
  }
  
}
