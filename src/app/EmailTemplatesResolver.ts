import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Page} from './pagination/page';
import {EmailJobService} from './_services/email-job.service';


@Injectable()
export class EmailTemplatesResolver implements Resolve<Observable<string>> {
  constructor(private emailJobService: EmailJobService) {
  }

  page: Page<any> = new Page();

  resolve() {
    return this.emailJobService.getEmailTemplatesPage(this.page.pageable);
  }
}
