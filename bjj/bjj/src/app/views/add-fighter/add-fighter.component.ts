import { Component, OnInit } from '@angular/core';
import { Fighter, FighterInterface } from '../../_models/fighter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-fighter',
  templateUrl: './add-fighter.component.html',
  styleUrls: ['./add-fighter.component.css']
})
export class AddFighterComponent implements OnInit {
  public fighter: FighterInterface;
  public belts: string[];
  public stripes: number[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.belts = ['White', 'Blue', 'Purple', 'Brown', 'Black'];
      this.stripes = [0, 1, 2, 3, 4];
      this.fighter = new Fighter();
  }

  addNewFighter(addFighterForm) { // the parameter is the form from the template
      console.log('fighterForm: ', addFighterForm.value); // we want the form values
      this.fighter = addFighterForm.value; // set this.fighter to the form's values
      this.http.post('/api/add-fighter', this.fighter).subscribe(() => console.log('Successfully posted!'));
      addFighterForm.resetForm(); // reset the form afterwards to clean it up
  }
}
