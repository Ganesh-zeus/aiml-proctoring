import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ProctoringComponent } from './components/proctoring/proctoring.component';
import { SelectUserComponent } from './components/select-user/select-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'select-user', pathMatch: 'full'},
  { path: 'select-user',component: SelectUserComponent },
  { path: 'add-user',component: AddUserComponent },
  { path: 'proctoring-test',component: ProctoringComponent},
  { path: 'proctoring-test/:user',component: ProctoringComponent},
  { path: '**', component: SelectUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
