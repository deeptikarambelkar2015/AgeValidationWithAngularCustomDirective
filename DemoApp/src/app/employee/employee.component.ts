import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {
  title = 'EmpMgmt';
  employee : Employee = new Employee();
  onSubmit(): void {
    console.log(JSON.stringify(this.employee, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
