import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../../_models/instructor';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  public instructors: any;
  public instructor: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { 
      this.http.get('/api/instructors').subscribe(instructors => {
      this.instructors = instructors;
      console.log('GET INSTRUCTORS: ', this.instructors);
    });
  }

  getInstructorToEdit(index) {  
      console.log('button works');
      this.instructor = this.instructors[index];
      this.router.navigate(['/edit-instructors', this.instructor._id]); 
  }

  getInstructorProfile(index) { 
      this.instructor = this.instructors[index];
      this.router.navigate(['/instructor-profile', this.instructor._id]);
  }

  deleteInstructor(index) {
      console.log(index);
      const instructorId = this.instructors[index]._id; 
      this.http.delete('/api/delete-instructor/' + `${instructorId}`).subscribe((instructors) => {
          this.instructors = instructors;
          console.log('Delete Instructor Worked along with automatic data refresh!');
      });
  }

}
