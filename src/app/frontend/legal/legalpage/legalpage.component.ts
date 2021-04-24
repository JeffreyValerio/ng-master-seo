import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-legalpage',
  templateUrl: './legalpage.component.html',
  styleUrls: ['./legalpage.component.css'],
})
export class LegalpageComponent implements OnInit {
  constructor(private tags: PageService) {}

  ngOnInit(): void {
    const title = 'LEGAL PAGE';
    this.tags.setPage({
      title,
      description: '✅ DESCRIPTION TO LEGAL PAGE',
      image: 'https://imagelegalpage.jpg',
    });
  }
}
