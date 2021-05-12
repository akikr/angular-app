import { ModalFormComponent } from '../modal-form/modal-form.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceDataService } from '../services/persistance-data.service';
import { EditFromComponent } from '../edit-from/edit-from.component';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.scss']
})
export class SubmittedDataComponent implements OnInit {

  data: any;

  constructor(private tableData: PersistanceDataService, private router: Router) { }

  ngOnInit(): void {
    this.data = JSON.parse(this.tableData.getData());
    console.log(this.data);
  }
  
  public removeData(index: number) {
    // (<[{}]>this.data).splice(index,1);
    this.data.splice(index,1);
    this.tableData.setData(this.data);
  }

  public editData(index: number) {
    // let selectedData =(<[{}]>this.data)[index];
    let selectedData = this.data[index-1];
    if(typeof(selectedData.username) == typeof(undefined)) {
      this.router.navigate(['/reactive-form', index]);
    } else {
      this.router.navigate(['/modal-based-form', index]);
    }
  }
}
