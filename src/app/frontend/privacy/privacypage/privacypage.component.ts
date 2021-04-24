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
    const title = 'Política de privacidad';
    this.tags.setPage({
      title,
      description:
        '✅ Política de privacidad de la web https:ng-master-seo.com',
      image: '../../assets/images/politica-de-privacidad.jpg',
    });
  }
}
