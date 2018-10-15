import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemspanelComponentComponent } from './heroes-component.component';

describe('ItemspanelComponentComponent', () => {
  let component: ItemspanelComponentComponent;
  let fixture: ComponentFixture<ItemspanelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemspanelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemspanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
