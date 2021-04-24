import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private tags: PageService) {}

  ngOnInit(): void {
    const title = 'HOME PAGE';
    this.tags.setPage({
      title,
      description: '✅ DESCRIPTION TO HOME PAGE',
      image: 'https://imagehomepage.jpg',
    });
  }
}
