import { Component, OnInit } from '@angular/core';
import { Pronouns } from './models/pronouns';
import { AlertService } from './services/alert.service';
import { TranslateService } from './services/translate.service';
import { pronouns } from './utils/pronouns';
import { verbs } from './utils/verb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isHiddenSplash: boolean = false;
  text: string = '';
  resultText: string = 'Here you can look the result';

  constructor(
    private _alert: AlertService,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.hiddenSplashScreen();
  }

  hiddenSplashScreen(): void {
    setTimeout(() => (this.isHiddenSplash = !this.isHiddenSplash), 2000);
  }

  translate(): void {
    const sentences = this.text.split(' ');
    if (this.validSetence(sentences)) this.showTranslate();
    else this._alert.badSetence();
  }

  showTranslate() {
    this._translate.getTranslate(this.text).subscribe(
      (result) => {
        this.resultText = result.responseData?.translatedText;
      },
      () => {
        this._alert.error();
      }
    );
  }

  validSetence(values: string[]): boolean {
    const pronoun = this.findPronoun(values[0]);
    if (Object.keys(pronoun).length === 0) return false;
    const verb = this.findVerb(pronoun);
    const subject = pronoun?.subjects ?? [];
    return this.isEqualSetences(values[0] + values[1], subject[0] + verb);
  }

  isEqualSetences(original: string, founded: string) {
    return original.toLowerCase() === founded.toLowerCase();
  }

  findPronoun(pronounValue: string): Pronouns {
    return pronouns.reduce((acc, pronoun) => {
      if (pronoun.subjects?.includes(pronounValue))
        acc = {
          subjects: [pronounValue],
          isSingular: pronoun.isSingular,
        };
      return acc;
    }, {});
  }

  findVerb(pronoun: Pronouns): string {
    const I = 'I';
    const pronounValue = pronoun.subjects ?? [];
    if (pronounValue[0].toLowerCase() === I.toLowerCase()) return 'am';
    else {
      const verb = verbs.find(
        (verb) => verb.isSingular === pronoun.isSingular
      )?.subjects;
      if (!!verb) return verb[0];
      return '';
    }
  }
  showInfoAlert(): void {
    this._alert.info();
  }
}
