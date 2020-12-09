import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListSearchComponent } from './bus-list-search.component';

describe('BusListSearchComponent', () => {
  let component: BusListSearchComponent;
  let fixture: ComponentFixture<BusListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
