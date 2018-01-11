import { Injectable } from '@angular/core';
/*import { Member } from './app.member';*/
/*import { MEMBERS } from './app.member.data';*/
import { NgForm } from '@angular/forms';


@Injectable()
/*Service*/
export class EmployeeMember {
     MyEmpMembers: NgForm[] = [];

     /* get function*/
     getEmpFunction(): NgForm[] {
         return this.MyEmpMembers;
     }
     /* add function */
     addEmpFunction(MyEmpMempass: NgForm) {
      /*  adding elements using unshift */
      this.MyEmpMembers.unshift(MyEmpMempass);

     }
}
