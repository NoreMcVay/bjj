import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddFighterComponent } from '../views/add-fighter/add-fighter.component';
import { FightersComponent } from '../views/fighters/fighters.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { EditFighterComponent } from '../views/edit-fighter/edit-fighter.component';
import { FighterProfileComponent } from '../views/fighter-profile/fighter-profile.component';
import { InstructorsComponent } from '../views/instructors/instructors.component';
import { AddInstructorComponent } from '../views/add-instructor/add-instructor.component';
import { EditInstructorComponent } from '../views/edit-instructor/edit-instructor.component';
import { InstructorProfileComponent } from '../views/instructor-profile/instructor-profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'add-fighter',
        component: AddFighterComponent
    },
    {
      path: 'add-instructor',
      component: AddInstructorComponent
    },
    {
        path: 'fighters',
        component: FightersComponent,
    },
    {
      path: 'instructors',
      component: InstructorsComponent
    },
    {
        path: 'fighter-profile/:id',
        component: FighterProfileComponent
    },
    {
        path: 'edit-fighters/:id',
        component: EditFighterComponent
    },
    {
      path: 'edit-instructors/:id',
      component: EditInstructorComponent
    },
    {
      path: 'instructor-profile/:id',
      component: InstructorProfileComponent
  },
    {
        path: '**',
        component: DashboardComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
