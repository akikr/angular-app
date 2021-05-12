import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomvalidationService } from '../services/customvalidation.service';
import { PersistanceDataService } from '../services/persistance-data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registationForm: FormGroup;
  submitted = false;
  edited = false;
  index: number;

  constructor(private formBuilder: FormBuilder, private customValidator: CustomvalidationService,
    private router: Router, private tableData: PersistanceDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.index = +params.get('id').valueOf();  // To convert string parameter value to number
      if(this.index == 0){
        this.router.navigate(['/reactive-form','']);
        this.registationForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.compose([Validators.required, this.customValidator.passwordValidator()])],
          confirmPassword: ['', [Validators.required]],
        },
          {
            validator: this.customValidator.passwordMatcher('password', 'confirmPassword'),
          }
        );
        this.submitted = false;
      } else {
        this.editForm(this.index-1);
        this.submitted = false;
        this.edited = true;
      }
    });
  }

  get registationFormControl() {
    return this.registationForm.controls;
  }

  onSubmit() {
    if (this.registationForm.valid) {
      alert('Form Submitted succesfully !!');
      let formData =  JSON.parse(this.tableData.getData());
      let userData = {
        name: this.registationForm.value.name,
        email: this.registationForm.value.email,
        password: this.registationForm.value.password
      }
      if(!this.submitted && this.edited){
        // (<[{}]>this.users)[this.index] = user;
        formData[this.index-1] = userData;
        // console.log(this.index-1);
        // console.log(this.users[this.index-1]);
        console.log('if-block');
      } else {
        formData.push(userData);
        console.log('else-block');
      } 
      this.tableData.setData(formData);
      this.submitted = true;
      this.router.navigate(['/submitted-data']);     
    }
  }

  editForm(id: number) {
    let data = JSON.parse(this.tableData.getData());
    let user = {
      name: data[id].name,
      email: data[id].email,
      password: '',
      confirmPassword: ''
    };
    this.registationForm = this.formBuilder.group(user);
  }
}
