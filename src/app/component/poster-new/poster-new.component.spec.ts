import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterNewComponent } from './poster-new.component';

describe('PosterNewComponent', () => {
  let component: PosterNewComponent;
  let fixture: ComponentFixture<PosterNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
