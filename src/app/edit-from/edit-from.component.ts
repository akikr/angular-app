import { User } from './../modals/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceDataService } from '../services/persistance-data.service';

@Component({
  selector: 'app-edit-from',
  templateUrl: './edit-from.component.html',
  styleUrls: ['./edit-from.component.scss']
})
export class EditFromComponent implements OnInit {

  data: any;

  constructor(private tableData: PersistanceDataService) { }

  ngOnInit(): void {
    this.data = JSON.parse(this.tableData.getData());
    console.log(this.data);
  }

}
