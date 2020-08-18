import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any [] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  search(word: string) {
    console.log(word);
    
    this.spotify.getArtist( word )
      .subscribe( (data: any) => {
        console.log(data.artists.items);
        this.artists = data.artists.items;
      })
  } 
}
