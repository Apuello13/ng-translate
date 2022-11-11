import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxSpinnerModule],
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

  it('should be true if receive a good setence', () => {
    expect(component.validSetence(['We', 'are'])).toBeTruthy();
  });

  it('should be true if receive a good setence in lower case', () => {
    expect(component.validSetence(['she', 'is'])).toBeTruthy();
  });

  it('should be true if receive a good sentence with spaces', () => {
    expect(
      component.validSetence(['you', 'are', 'amazing', '', ''])
    ).toBeTruthy();
  });

  it('should be true if receive a good sentece in short form', () => {
    expect(component.validSetence(['she’s', 'atomic'])).toBeTruthy();
  });

  it('should be false if receive a bad setence in short form', () => {
    expect(component.validSetence(['you’s', 'small'])).toBeFalsy();
  });
});
