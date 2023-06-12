import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from 'src/app/interfaces/item.interface';
import { ItemService } from 'src/app/services/item.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  id!: string
  card$!: Observable<Cocktail>

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    console.log('Hola ', this.id)
    this.card$ = this.itemService.getById(this.id).pipe(tap(console.log))
  }
}
