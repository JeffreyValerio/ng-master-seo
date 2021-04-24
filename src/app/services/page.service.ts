import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Tags } from '../models/tags';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  public readonly postfix = ' | NG MASTER SEO';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  setPage(config: Tags) {
    const postfix = config.skipTitlePostfix ? '' : this.postfix;
    this.meta.updateTag({ property: 'og:url', content: this.getCurrentPath() });

    if (config.title) {
      const title = config.title + postfix;
      this.title.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ name: 'twitter:title', content: title });
    }

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({
        property: 'og:description',
        content: config.description,
      });
      this.meta.updateTag({
        name: 'twitter:description',
        content: config.description,
      });
    }

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    document.dispatchEvent(new Event('prerender-ready'));
  }

  getCurrentPath(includeBaseUrl = true) {
    const prefix = includeBaseUrl ? environment.baseUrl : '';
    return prefix + this.router.url;
  }
}
