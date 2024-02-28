import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs'; 
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id:0,
      nom: "Angular",
      dateDeRendu: new Date("08-08-2024"),
      rendu: true
    },
    {
      id:1,
      nom: "SQL",
      dateDeRendu: new Date("08-08-2024"),
      rendu: false
    },
    {
      id:2,
      nom: "DB",
      dateDeRendu: new Date("08-08-2024"),
      rendu: true
    }
  ]

  backendURL = "http://localhost:8010/api/assignments"

  constructor(private loggingService: LoggingService, private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.backendURL)
    // return of(this.assignments); 
  }

  getAssignment(id: number): Observable<Assignment | undefined> {
    // const a:Assignment | undefined = this.assignments.find(a => a.id == id)
    // return of(a);
    return this.http.get<Assignment>(this.backendURL + "/" + id)
  }

  addAssignment(assignment: Assignment): Observable<any> {
    // this.assignments.push(assignment);
    // this.loggingService.log(assignment.nom, "Ajouté")
    // return of("Ajouté")
    return this.http.post<Assignment>(this.backendURL, assignment)
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    // this.loggingService.log(assignment.nom, "Mise a jour effectué")
    // return of("Mise a jour effectué")
    return this.http.put<string>(this.backendURL, assignment)
  }

  deleteAssignment(assignment: Assignment): Observable<any>{
    // this.assignments = this.assignments.filter(a => a!== assignment);
    // let pos = this.assignments.indexOf(assignment);
    // this.assignments.splice(pos, 1);
    // this.loggingService.log(assignment.nom, "Supprimé")
    // return of("Supprimé")
    return this.http.delete<any>(this.backendURL + "/" + assignment._id)
  }
}
