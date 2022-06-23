import { Component } from '@angular/core';
import {$localize} from "@angular/localize/init";

@Component({
  selector: 'testing-localization-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  test = $localize`some string to localize`;
}
