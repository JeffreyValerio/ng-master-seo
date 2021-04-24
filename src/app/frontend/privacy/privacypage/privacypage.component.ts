import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-privacypage',
  templateUrl: './privacypage.component.html',
  styleUrls: ['./privacypage.component.css'],
})
export class PrivacypageComponent implements OnInit {
  constructor(private tags: PageService) {}

  ngOnInit(): void {
    const title = 'PRIVACY PAGE';
    this.tags.setPage({
      title,
      description: '✅ DESCRIPTION TO PRIVACY PAGE',
      image: 'https://imageprivacypage.jpg',
    });
  }
}
