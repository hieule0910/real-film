import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesNewReleaseComponent } from './movies-new-release.component';

describe('MoviesNewReleaseComponent', () => {
  let component: MoviesNewReleaseComponent;
  let fixture: ComponentFixture<MoviesNewReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesNewReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesNewReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
