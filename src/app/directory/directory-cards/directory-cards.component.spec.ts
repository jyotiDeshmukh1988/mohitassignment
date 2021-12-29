import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryCardsComponent } from './directory-cards.component';

describe('DirectoryCardsComponent', () => {
  let component: DirectoryCardsComponent;
  let fixture: ComponentFixture<DirectoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
