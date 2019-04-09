import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fighter } from '../../_models/fighter';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {
  public fighters: any;
  public fighter: any;
  public fighterId: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { // On component initialisation, make a get request to get all fighters details
      this.http.get('/api/fighters').subscribe(fighters => {
      this.fighters = fighters;
      console.log('GET FIGHTERS: ', this.fighters);
    });
  }

  // tslint:disable-next-line:max-line-length
  getFighterToEdit(index) {  // Notice on Line 6 of the html file,let i = index and then we pass i to the function. This is the index number of the fighter in the fighters array so we can locate the selected fighter
      console.log('button works');
      this.fighter = this.fighters[index];
      this.router.navigate(['/edit-fighters', this.fighter._id]); // navigate the browser to /edit-fighters/this.fighters._id
  }

  getFighterProfile(index) { // same thing with the index again
      this.fighter = this.fighters[index];
      this.router.navigate(['/fighter-profile', this.fighter._id]);
  }

  deleteFighter(index) {
      console.log(index);
      this.fighterId = this.fighters[index]._id; // CHANGED TO CONST
      this.http.delete('/api/delete-fighter/' + `${this.fighterId}`).subscribe((fighters) => {
          this.fighters = fighters;
          console.log('Delete Fighter Worked along with automatic data refresh!');
      });
  }
}
