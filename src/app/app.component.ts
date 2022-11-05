import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isHiddenSplash: boolean = false;
  text: string = '';
  resultText: string = 'Here you look the result';

  ngOnInit(): void {
    this.hiddenSplashScreen();
  }

  hiddenSplashScreen(): void {
    setTimeout(() => (this.isHiddenSplash = !this.isHiddenSplash), 2000);
  }
}
