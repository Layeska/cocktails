import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { Cocktail } from 'src/app/interfaces/item.interface';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  item: Cocktail[] = []
  itemValueFC = new FormControl('')
  evalue: number | undefined = 0

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemValueFC.valueChanges.pipe(debounceTime(1000))
    .subscribe(res => {
      this.evalue = this.itemValueFC.value?.length
      this.searchByName(res)
    })
  }

  searchByName(nameCoctail: string|null) {
    this.itemService.getbyName(nameCoctail).subscribe(res => {
      this.item = res
    })
  }
}
