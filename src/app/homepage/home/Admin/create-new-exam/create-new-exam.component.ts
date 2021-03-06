import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-new-exam',
  templateUrl: './create-new-exam.component.html',
  styleUrls: ['./create-new-exam.component.css']
})
export class CreateNewExamComponent implements OnInit {
  date:string
  start_time:string
  venue:string
  mCode:string
  allModules:any


  minDate(): Date {
    return new Date();
  }
    constructor(private http:HttpClient, private service:UserService,private toastr:ToastrService) {

  }
  async showAllModules(){
    let ses = await this.service.getAllModulesF();
    this.allModules = ses;


  }

  ngOnInit() {
    this.showAllModules();
  }
  async create(mCode,date,start_time,venue){
    if( this.mCode===undefined || this.venue===undefined || this.date===undefined){
      this.toastr.error('','Missing Required Information', {positionClass: 'toast-bottom-right'});
      return
    }
    else if(await this.service.submitExamDetails(this.mCode,this.date,this.start_time,this.venue)){
      this.date = "";
      this.start_time = "";
      this.venue = "";
      //Probable cause of errors by adding more options to the list
      this.mCode = "";
      this.toastr.success('','Exam Scheduled', {positionClass: 'toast-bottom-right'});
    }
  }
}
