import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any [] = [];

  loading: boolean;

  constructor(private spotify: SpotifyService) {}
 
  search(word: string) {
    console.log(word);

    this.loading = true;

    this.spotify.getArtist( word )
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      })
  } 
}
