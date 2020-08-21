import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[] = [];
  
  constructor() { }

  artistPage( item: any ) {

    let artistId;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.id;
    }
    console.log(artistId);
    
  }

}
