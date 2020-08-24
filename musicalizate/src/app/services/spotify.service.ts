import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  oAuthToken: string = 'BQAhjaeb_ABVxv4kZ0n82TNPEFFajnscs5dr9cuBkeJAYGTFEBjgiKg8N6v3RU4_PP1uOZjc1eBMj9qgE90';
  
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
