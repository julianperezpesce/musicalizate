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
  loading: boolean;


  constructor(private spotify: SpotifyService ) { 

    this.loading = true;

    spotify.getFeaturedPlaylist()      
      .subscribe( (data: any) => {      
      this.newPlaylists = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
