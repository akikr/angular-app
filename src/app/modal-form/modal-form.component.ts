import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../modals/User';
import { PersistanceDataService } from '../services/persistance-data.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {

  userModal = new User();
  users: any;
  edited = false;
  index: number;

  constructor(private router: Router, private tableData: PersistanceDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.index = +params.get('id').valueOf();  // To convert string parameter value to number
      if(this.index == 0){
        this.router.navigate(['/modal-based-form','']);
        this.edited = false;
      } else {
        this.editForm(this.index-1);
        this.edited = true;
      }
    });
  }

  onSubmit() {
    alert('Template-Modal-Form Submitted succesfully !!');
    this.users = JSON.parse(this.tableData.getData());
    // this.users.forEach(function(user, index) {
    //   console.log("[" + index + "]: " + user.name);
    // });
    let user = {
      name: this.userModal.name,
      email: this.userModal.email,
      username: this.userModal.username,
      password: this.userModal.password
    };
    if(this.edited){
      // (<[{}]>this.users)[this.index] = user;
      this.users[this.index-1] = user;
    } else {
      this.users.push(user);
    }
    this.tableData.setData(this.users);
    this.router.navigate(['/submitted-data']);
  }

  editForm(id: number) {
    let data = JSON.parse(this.tableData.getData());
    let user = {
      name: data[id].name,
      email: data[id].email,
      username: data[id].username,
      password: '',
      confirmPassword: ''
    };
    this.userModal = user;
  }
}
