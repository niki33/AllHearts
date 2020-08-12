import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
            <h1>{{title}}</h1>
            <jm-journals></jm-journals>
              <div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All Hearts Journal';
}
