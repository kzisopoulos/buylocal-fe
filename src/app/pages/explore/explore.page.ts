import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExplorePage {}
