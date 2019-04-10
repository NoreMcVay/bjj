import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Instructor } from '../../_models/instructor';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.css']
})
export class EditInstructorComponent implements OnInit {
  public instructor: any;
  public belts: string[];
  public stripes: number[];
  public years: string[];
  public instructorId: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router)  { }

  ngOnInit() {
      this.instructor = new Instructor();
      this.belts = ['White', 'Blue', 'Purple', 'Brown', 'Black'];
      this.stripes = [0, 1, 2, 3, 4];
      this.years = ['0-5', '5-10', '10-15', 'over 15 years'];
      this.route.params.subscribe(params => {
          this.instructorId = params.id;
          console.log('route params: ', params);
      });
      this.getInstructor(this.instructorId);
  }

  getInstructor(instructorId) {
      console.log('INSTRUCTOR ID: ', instructorId);
      this.http.get('/api/instructor/' + instructorId).subscribe((details) => {
          console.log('getInstructor: ', details);
          this.instructor = details[0];
          console.log('THIS INSTRUCTOR: ', this.instructor);
      });
  }

  updateInstructor(editInstructorForm: NgForm) {
      console.log('instructorForm: ', editInstructorForm.value);
      this.instructor = Object.assign(this.instructor, editInstructorForm.value);
      console.log('Instructor Updated details', this.instructor);
      this.http.put('/api/update-instructor', this.instructor).subscribe(() => console.log('Successfully posted!'));
  }

}
