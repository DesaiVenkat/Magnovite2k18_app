import { Component } from '@angular/core';

import { CulturalPage } from '../cultural/cultural';
import { WorkshopPage } from '../workshop/workshop';
import { TechnicalPage } from '../technical/technical';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TechnicalPage;
  tab2Root = CulturalPage;
  tab3Root = WorkshopPage;

  constructor() {

  }
}
