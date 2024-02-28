import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AssignmentsService } from '../../shared/assignments.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatButtonModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  @Input()
  assignmentTransmis!: Assignment | undefined
  // @Output()
  // deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentService: AssignmentsService){}

  ngOnInit(): void{}

  onAssignmentRendu(){
    if(this.assignmentTransmis){
      this.assignmentTransmis.rendu = true
      this.assignmentService.updateAssignment(this.assignmentTransmis)
        .subscribe(res => console.log(res))
    }
  }

  onDelete(){
    // this.deleteAssignment.emit(this.assignmentTransmis);
    if(this.assignmentTransmis){
        this.assignmentService.deleteAssignment(this.assignmentTransmis)
          .subscribe(reponse => {
            console.log(reponse)
            this.assignmentTransmis = undefined
          }); 
    }
  }
}
