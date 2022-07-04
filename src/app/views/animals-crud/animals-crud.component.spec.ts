import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCrudComponent } from './animals-crud.component';

describe('AnimalsCrudComponent', () => {
  let component: AnimalsCrudComponent;
  let fixture: ComponentFixture<AnimalsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
