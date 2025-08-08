import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div>Hello from dashboard</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {}
