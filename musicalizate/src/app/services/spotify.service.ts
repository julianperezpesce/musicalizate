import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  oAuthToken: string = 'BQCfJ2A7membihT2ioJ0yRkFkZWjUO-aUPL7BCdCS1b5eHmg585yWAgrSkMxruN1d4UUWFEj5wm40sZ64pw';
  
  constructor(private http: HttpClient) { }

  getFeaturedPlaylist() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.oAuthToken}`
    })
    
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', { headers })
              .pipe(map( data => data['playlists'].items));
  }

  getArtist( word: string ) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.oAuthToken}`
    })
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${word}&type=artist&limit=10`, { headers })
              .pipe( map(data => data['artists'].items));
      
  }
  
}
