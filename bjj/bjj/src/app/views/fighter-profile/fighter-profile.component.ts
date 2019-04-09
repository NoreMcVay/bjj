import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  styleUrls: ['./fighter-profile.component.css']
})
export class FighterProfileComponent implements OnInit {
  public fighterId: any;
  public fighter: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fighterId = params.id;
    });
    this.getFighter(this.fighterId);
  }

  getFighter(Id) {
      this.http.get('/api/fighter/' + `${Id}`).subscribe((fighter) => {
        this.fighter = fighter[0]; // It returned an array and I want an object so I select the first object in the array by using [0].
        console.log('This Fighter :', this.fighter);
      });
  }
}
