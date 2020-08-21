import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  oAuthToken: string = 'BQDE-FraMWZYxMoLdZSrtnFoBuQQ4jwcTcuX79cSo-dpw5yUKpwEn7zKtngtXDnBZkdm3XROvrCkr8z9yCk';
  
  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`; 
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.oAuthToken }`
    });

    return this.http.get(url, { headers });
  }

  getFeaturedPlaylist() {

    return this.getQuery('browse/featured-playlists')
              .pipe(map( data => data['playlists'].items ));

  }

  getArtist( word: string ) {    
    
    return this.getQuery(`search?q=${ word }&type=artist&limit=10`)
            .pipe( map( data => data['artists'].items ));      
  }
  
}
