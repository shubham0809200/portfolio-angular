import { Component } from '@angular/core';
import { navs } from './constant/constant';
import details from 'src/assets/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  navs = navs;
  details = details;

  isDarkEnable = false;

  toggleDarkMode(): void {
    this.isDarkEnable = !this.isDarkEnable;
  }
}
