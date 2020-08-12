import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  newPlaylists: any[] = [];

  constructor(private spotify: SpotifyService ) { 

    spotify.getFeaturedPlaylist().subscribe( (data: any) => {
      console.log(data.playlists.items);
      
      this.newPlaylists = data.playlists.items;
    })
  }

  ngOnInit(): void {
  }

}
