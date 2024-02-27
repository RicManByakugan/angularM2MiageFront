import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: AssignmentsComponent},
    { path: 'add', component: AssignmentsComponent}
];
