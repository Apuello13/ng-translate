import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should be true if receive a pronoun firts', () => {
    expect(component.validSetence(['She', 'is'])).toBeTruthy();
  });

  it('should be true if receive I am', () => {
    expect(component.validSetence(['I', 'am'])).toBeTruthy();
  });

  it('should be false if receive bad setence', () => {
    expect(component.validSetence(['You', 'is'])).toBeFalsy();
  });

  it('should be true is receive a good setence', () => {
    expect(component.validSetence(['We', 'are'])).toBeTruthy();
  });
});
