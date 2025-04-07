import { Component } from '@angular/core';
import {JdrSelectComponent} from './components/jdr-select/jdr-select.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JdrSelectComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jdr-app';
}
