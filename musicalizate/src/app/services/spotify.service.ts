import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  oAuthToken: string = 'BQDf5f_i0vs28rvqew3bfIO_od9dmx84ay08DKm8FiFVVqDocC2fOBjSpukm8Nt_XweZN5WER-8mVOYFYgg';
  
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
