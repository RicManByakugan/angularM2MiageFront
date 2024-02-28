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
import { AssignmentsService } from '../shared/assignments.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assignments',
  standalone: true,
  providers: [],
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AddAssignmentComponent, AssignmentDetailComponent, CommonModule, RenduDirective, 
    FormsModule, MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule,MatNativeDateModule, MatFormFieldModule, MatDividerModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  Titre = "Mon application sur les Assignments !";
  assignments: Assignment[] = []
  formVisible = false

  constructor(private assignmentService: AssignmentsService) { }
  ngOnInit(): void {
    this.assignmentService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

  onAddAssignmentBtnClick(){
    this.formVisible = true
  }

  assignmentSelecionne!: Assignment | undefined
  assignmentClique(a: Assignment): void {
    this.assignmentSelecionne = a
  }

  // onNouvelAssignment(a: Assignment){
  //   this.assignmentService.addAssignment(a)
  //     .subscribe(reponse => {
  //       console.log(reponse);
  //       this.formVisible = false
  //     })
  // }

  onUpdateAssignment(a: Assignment) {
    this.assignmentService.updateAssignment(a)
        .subscribe(reponse => {
          console.log(reponse);
        })
  }

  onDeleteAssignment(a: Assignment) {
    this.assignmentService.deleteAssignment(a)
      .subscribe(reponse => {
        console.log(reponse)
        this.assignmentSelecionne = undefined
      }); 
    // if(this.assignmentSelecionne) {
    //   let pos = this.assignments.indexOf(a);
    //   this.assignments.splice(pos, 1);
    // }  
  }
  
}
