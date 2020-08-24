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

  //loading spinner
  loading: boolean;

  constructor(private spotify: SpotifyService) {}
 
  search(word: string) {
    console.log(word);

    //loading spinner
    this.loading = true;

    this.spotify.getArtists( word )
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        
        //loading spinner
        this.loading = false;
      })
  } 
}
