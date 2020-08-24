import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  oAuthToken: string = 'BQDXaniRqT3rfSB58vk-ZWtlhsUwqdiG-znHC_fFpOTQVmCdussBlcDrsHW-19ozi2gx4qHB8_zRKOKkaDY';
  
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

  // getNewReleases() {

  //   return this.getQuery('browse/new-releases?limit=20')
  //             .pipe(map( data => data['albums'].items ));          

  // }

  //En el search buscar varios artistas
  getArtists( word: string ) {    
    
    return this.getQuery(`search?q=${ word }&type=artist&limit=10`)
            .pipe( map( data => data['artists'].items ));      
  }

  //Obtener info de 1 artista
  getArtist( id: string ) {    
    
    return this.getQuery(`artists/${ id }`);
            // .pipe( map( data => data['artists'].items ));      
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( data => data['tracks']))
  }
  
}
