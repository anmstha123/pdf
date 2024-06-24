import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel-mdb',
  templateUrl: './carousel-mdb.component.html',
  styleUrls: ['./carousel-mdb.component.css'],
  imports: [NgbCarouselModule, NgIf],
  standalone: true,
})
export class CarouselMDBComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
