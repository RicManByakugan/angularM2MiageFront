import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs'; 
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
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

  constructor(private loggingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté")
    return of("Ajouté")
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    return of("Mise a jour effectué")
  }

  deleteAssignment(assignment: Assignment): Observable<string>{
    // this.assignments = this.assignments.filter(a => a!== assignment);
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of("Supprimé")
  }
}
