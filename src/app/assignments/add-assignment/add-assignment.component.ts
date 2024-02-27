import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule, 
    FormsModule, MatListModule, MatButtonModule, MatInputModule, MatDatepickerModule ,MatNativeDateModule, MatFormFieldModule, MatDividerModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  ajoutActive = false
  NomAssignment!: any;
  DateAssignment!: any;

  onSubmit(event: any){
    if ((this.NomAssignment == "") || (this.DateAssignment == "")) return;
    let newassignment = new Assignment()
    newassignment.nom = this.NomAssignment
    newassignment.dateDeRendu = this.DateAssignment
    newassignment.rendu = false
    console.log(newassignment);
    this.nouvelAssignment.emit(newassignment)
    // this.assignments.push(assignment)
  }
}
