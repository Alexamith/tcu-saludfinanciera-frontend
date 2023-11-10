import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationVideoComponent } from './information-video.component';

describe('InformationVideoComponent', () => {
  let component: InformationVideoComponent;
  let fixture: ComponentFixture<InformationVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
