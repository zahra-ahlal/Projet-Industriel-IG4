import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdmComponent } from './info-adm.component';

describe('InfoAdmComponent', () => {
  let component: InfoAdmComponent;
  let fixture: ComponentFixture<InfoAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
