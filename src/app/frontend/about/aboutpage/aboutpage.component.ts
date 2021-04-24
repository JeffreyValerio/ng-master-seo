import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css'],
})
export class AboutpageComponent implements OnInit {
  constructor(private tags: PageService) {}

  ngOnInit(): void {
    const title = 'ABOUT PAGE';
    this.tags.setPage({
      title,
      description: '✅ DESCRIPTION TO ABOUT PAGE',
      image: 'https://imageaboutpage.jpg',
    });
  }
}
