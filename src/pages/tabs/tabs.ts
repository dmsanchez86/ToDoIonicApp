import { Component } from '@angular/core';

import { PendientsPage } from '../pendients/pendients';
import { FinishersPage } from '../finishers/finishers';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientsPage;
  tab2Root = FinishersPage;

  constructor() {

  }
}
