import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFighterComponent } from './edit-fighter.component';

describe('EditFighterComponent', () => {
  let component: EditFighterComponent;
  let fixture: ComponentFixture<EditFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
