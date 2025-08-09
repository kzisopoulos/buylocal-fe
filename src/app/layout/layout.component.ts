import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet, NavbarComponent, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
