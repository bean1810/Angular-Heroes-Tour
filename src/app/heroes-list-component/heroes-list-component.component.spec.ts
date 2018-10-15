import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponentComponent } from './heroes-list-component.component';

describe('HeroesListComponentComponent', () => {
  let component: HeroesListComponentComponent;
  let fixture: ComponentFixture<HeroesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
