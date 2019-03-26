import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuePage } from './tab3.page';

describe('RescuePage', () => {
  let component: RescuePage;
  let fixture: ComponentFixture<RescuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
