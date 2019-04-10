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

  addNewFighter(addFighterForm) { 
      console.log('fighterForm: ', addFighterForm.value); 
      this.fighter = addFighterForm.value; 
      this.http.post('/api/add-fighter', this.fighter).subscribe(() => console.log('Successfully posted!'));
      addFighterForm.resetForm(); 
  }
}
