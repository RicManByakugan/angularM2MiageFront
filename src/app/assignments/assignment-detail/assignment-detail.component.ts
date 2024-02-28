import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AssignmentsService } from '../../shared/assignments.service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatButtonModule, RouterLink],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  // @Input()
  assignmentTransmis!: Assignment | undefined
  // @Output()
  // deleteAssignment = new EventEmitter<Assignment>();

  constructor(
    private assignmentService: AssignmentsService, 
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    this.getAssignment()
  }


  getAssignment(){
    const id = this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id)
      .subscribe(assignment => this.assignmentTransmis = assignment)
  }

  onAssignmentRendu(){
    if(this.assignmentTransmis){
      this.assignmentTransmis.rendu = true
      this.assignmentService.updateAssignment(this.assignmentTransmis)
        .subscribe(res => {
          console.log(res)
          this.router.navigate(["/home"])
        })
    }
  }

  onDelete(){
    // this.deleteAssignment.emit(this.assignmentTransmis);
    if(this.assignmentTransmis){
        this.assignmentService.deleteAssignment(this.assignmentTransmis)
          .subscribe(reponse => {
            console.log(reponse)
            this.router.navigate(["/home"])
            // this.assignmentTransmis = undefined
          }); 
    }
  }
}
