import { Component } from '@angular/core';
// to create your api use this
// json-server --watch src/api/db.json --port 4200 or another port number
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HttpServices';
}
