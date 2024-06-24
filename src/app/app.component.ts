import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
