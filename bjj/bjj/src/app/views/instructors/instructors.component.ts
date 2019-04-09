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

  ngOnInit() { // On component initialisation, make a get request to get all fighters details
      this.http.get('/api/instructors').subscribe(instructors => {
      this.instructors = instructors;
      console.log('GET INSTRUCTORS: ', this.instructors);
    });
  }

  // tslint:disable-next-line:max-line-length
  getInstructorToEdit(index) {  // Notice on Line 6 of the html file,let i = index and then we pass i to the function. This is the index number of the fighter in the fighters array so we can locate the selected fighter
      console.log('button works');
      this.instructor = this.instructors[index];
      this.router.navigate(['/edit-instructors', this.instructor._id]); // navigate the browser to /edit-fighters/this.fighters._id
  }

  getInstructorProfile(index) { // same thing with the index again
      this.instructor = this.instructors[index];
      this.router.navigate(['/instructor-profile', this.instructor._id]);
  }

  deleteInstructor(index) {
      console.log(index);
      const instructorId = this.instructors[index]._id; // CHANGED TO CONST
      this.http.delete('/api/delete-instructor/' + `${instructorId}`).subscribe((instructors) => {
          this.instructors = instructors;
          console.log('Delete Instructor Worked along with automatic data refresh!');
      });
  }

}
