import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css'],
})
export class ContactpageComponent implements OnInit {
  constructor(private tags: PageService) {}

  ngOnInit(): void {
    const title = 'CONTACT PAGE';
    this.tags.setPage({
      title,
      description: '✅ DESCRIPTION TO CONTACT PAGE',
      image: 'https://imagecontactpage.jpg',
    });
  }
}
