import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-cookiespages',
  templateUrl: './cookiespages.component.html',
  styleUrls: ['./cookiespages.component.css'],
})
export class CookiespagesComponent implements OnInit {
  constructor(private tags: PageService) {}

  ngOnInit(): void {
    const title = 'COOKIES PAGE';
    this.tags.setPage({
      title,
      description: '✅ DESCRIPTION TO COOKIES PAGE',
      image: 'https://imagecookiespage.jpg',
    });
  }
}
