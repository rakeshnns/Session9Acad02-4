import { Component, OnInit   } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeMember } from './app.service';
import { Degreelist } from './app.select.service';
import { MyEmpDeg } from './app.member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  Firstname: string;
  Lastname: string;
  Department: string;
  EMPARRAY: NgForm[];
  EMPDeg: MyEmpDeg[];
  len: number;

  constructor(private employeemember: EmployeeMember, private degreelist: Degreelist) {}

  ngOnInit() {
    this.Firstname = 'FName';
    this.Lastname = 'LName';
    this.Department = 'De';
    this.EMPDeg  = this.degreelist.getTitle();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.employeemember.addEmpFunction(form.value);
    }

    this.EMPARRAY  = this.employeemember.getEmpFunction();
    this.len = this.EMPARRAY.length;
  }
}
