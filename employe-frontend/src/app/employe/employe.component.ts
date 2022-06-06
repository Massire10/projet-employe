import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  nom= "SY";
  prenom= "Massire";
  age= 25;
  public persons = ["Maya", "Maria", "Mass", "Mania", "Mama"];

   getName(){
  return this.prenom;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
