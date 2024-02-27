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
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import {MatListModule} from '@angular/material/list';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

@Component({
  selector: 'app-assignments',
  standalone: true,
  providers: [],
  imports: [AddAssignmentComponent, AssignmentDetailComponent, CommonModule, RenduDirective, 
    FormsModule, MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule,MatNativeDateModule, MatFormFieldModule, MatDividerModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  Titre = "Mon application sur les Assignments !";
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
  formVisible = false

  ngOnInit(): void {
    // setTimeout(() =>{
    //   this.ajoutActive = false;
    // }, 5000)
  }

  onAddAssignmentBtnClick(){
    this.formVisible = true
  }
  assignmentSelecionne!: Assignment
  assignmentClique(a: Assignment): void {
    this.assignmentSelecionne = a
  }

  onNouvelAssignment(a: Assignment){
    this.assignments.push(a)
    this.formVisible = false
  }

  
}
