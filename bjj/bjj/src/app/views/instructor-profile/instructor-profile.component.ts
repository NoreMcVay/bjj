import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {

  public instructorId: any;
  public instructor: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.instructorId = params.id;
    });
    this.getInstructor(this.instructorId);
  }

  getInstructor(Id) {
      this.http.get('/api/instructor/' + `${Id}`).subscribe((instructor) => {
        // tslint:disable-next-line:max-line-length
        this.instructor = instructor[0]; // It returned an array and I want an object so I select the first object in the array by using [0].
        console.log('This Instructor :', this.instructor);
      });
  }
}
