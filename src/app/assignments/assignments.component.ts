import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button'  
import {MatInputModule} from '@angular/material/input'  
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatNativeDateModule} from '@angular/material/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  standalone: true,
  providers: [],
  imports: [CommonModule, RenduDirective, 
    FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule,MatNativeDateModule, MatFormFieldModule, MatDividerModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  Titre = "Mon application sur les Assignments !";
  ajoutActive = false
  assignments = [
    {
      nom: "Angular",
      dateDeRendu: new Date("08-08-2024"),
      rendu: true
    },
    {
      nom: "SQL",
      dateDeRendu: new Date("08-08-2024"),
      rendu: false
    },
    {
      nom: "DB",
      dateDeRendu: new Date("08-08-2024"),
      rendu: true
    }
  ]


  ngOnInit(): void {
    // setTimeout(() =>{
    //   this.ajoutActive = false;
    // }, 5000)


  }

  NomAssignment!: any;
  DateAssignment!: any;
  onSubmit(event: any){
    let assignment = new Assignment()
    assignment.nom = this.NomAssignment
    assignment.dateDeRendu = this.DateAssignment
    assignment.rendu = false
    console.log(assignment);
    this.assignments.push(assignment)
  }
}
