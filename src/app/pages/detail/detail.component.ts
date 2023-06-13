import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Cocktail } from 'src/app/interfaces/item.interface';
import { ItemService } from 'src/app/services/item.service';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [MatCardModule, NgIf, CommonModule]
})

export class DetailComponent {
  id!: string
  card$!: Observable<Cocktail>
  items: Cocktail[] = []

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.card$ = this.itemService.showDetails(this.id).pipe(tap(console.log))
  }
}
