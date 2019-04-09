import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FightersComponent } from './views/fighters/fighters.component';
import { AddFighterComponent } from './views/add-fighter/add-fighter.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditFighterComponent } from './views/edit-fighter/edit-fighter.component';
import { FighterProfileComponent } from './views/fighter-profile/fighter-profile.component';
import { AddInstructorComponent } from './views/add-instructor/add-instructor.component';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { InstructorProfileComponent } from './views/instructor-profile/instructor-profile.component';
import { EditInstructorComponent } from './views/edit-instructor/edit-instructor.component';

@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      FightersComponent,
      AddFighterComponent,
      EditFighterComponent,
      FighterProfileComponent,
      AddInstructorComponent,
      InstructorsComponent,
      InstructorProfileComponent,
      EditInstructorComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
