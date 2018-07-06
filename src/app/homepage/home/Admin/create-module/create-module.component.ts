///<reference path="../../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {
  batch: string;
  mCode: string;
  title: string;
  select: number;

  allSemesters  = [
    { semester: 1 },
    { semester: 2 },
    { semester: 3 },
    { semester: 4 },
    { semester: 5 },
    { semester: 6 },
    { semester: 7 },
    { semester: 8 },
  ]

  constructor(private http: HttpClient,private service: UserService) {

  }

  async save(batch,select,mCode,title) {
    if(await this.service.submitNewModule(batch,select,mCode,title)){

    //Probable cause of unknown errors because select is chosen from a drop down menu
    this.batch = "";
    this.mCode = "";
    this.title = "";
    }

  }
  ngOnInit() {
  }




}