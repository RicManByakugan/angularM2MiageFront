import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs'; 

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

  constructor() { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of("Ajouté")
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    return of("Mise a jour effectué")
  }


}
