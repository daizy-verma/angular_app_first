import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesEgComponent } from './pipes-eg.component';

describe('PipesEgComponent', () => {
  let component: PipesEgComponent;
  let fixture: ComponentFixture<PipesEgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesEgComponent]
    });
    fixture = TestBed.createComponent(PipesEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
