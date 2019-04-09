import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Fighter } from '../../_models/fighter';

@Component({
  selector: 'app-edit-fighter',
  templateUrl: './edit-fighter.component.html',
  styleUrls: ['./edit-fighter.component.css']
})
export class EditFighterComponent implements OnInit {
    public fighter: any;
    public belts: string[];
    public stripes: number[];
    public fighterId: any;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router)  { }

    ngOnInit() {
        this.fighter = new Fighter();
        this.belts = ['White', 'Blue', 'Purple', 'Brown', 'Black'];
        this.stripes = [0, 1, 2, 3, 4];
        this.route.params.subscribe(params => { 
            this.fighterId = params.id;
            console.log('route params: ', params);
        });
        this.getFighter(this.fighterId);
    }

    getFighter(fighterId) {
        console.log('FIGHTER ID: ', fighterId);
        this.http.get('/api/fighter/' + fighterId).subscribe((details) => {
            console.log('getFighter: ', details);
            this.fighter = details[0];
            console.log('THIS FIGHTER: ', this.fighter);
        });
    }

    updateFighter(editFighterForm: NgForm) {
        console.log('fighterForm: ', editFighterForm.value);
        this.fighter = Object.assign(this.fighter, editFighterForm.value);
        console.log('Fighter Updated details', this.fighter);
        this.http.put('/api/update-fighter', this.fighter).subscribe(() => console.log('Successfully posted!'));
    }
}
