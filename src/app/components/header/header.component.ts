import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, NgIf, RouterModule]
})

export class HeaderComponent {
  show: number = 1

  ngOnInit(): void {
    this.show = this.showViewPort() ? 1 : 0
  }

  showViewPort() {
    return (window.screen.width >= 630)
  }
}
