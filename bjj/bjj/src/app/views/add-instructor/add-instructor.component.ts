import { Component, OnInit } from '@angular/core';
import { Instructor, InstructorInterface } from '../../_models/instructor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {
  public instructor: InstructorInterface;
  public belts: string[];
  public stripes: number[];
  public years: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.belts = ['White', 'Blue', 'Purple', 'Brown', 'Black']; 
      this.stripes = [0, 1, 2, 3, 4]; 
      this.years = ['0-5', '5-10', '10-15', 'over 15 years'];
      this.instructor = new Instructor();
  }

  addNewInstructor(addInstructorForm) { 
      console.log('instructorForm: ', addInstructorForm.value); 
      this.instructor = addInstructorForm.value;
      this.http.post('/api/add-instructor', this.instructor).subscribe(() => console.log('Successfully posted!'));
      addInstructorForm.resetForm();
  }
}
