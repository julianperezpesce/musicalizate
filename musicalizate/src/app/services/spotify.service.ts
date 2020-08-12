import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getFeaturedPlaylist() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC8dmisEFn61OO-IRRoXDnOpzSBYd-axYqiP3NgcqxsvBw0NBoT9eLckq_T9D7ONtraAIeODBR5WtfeDmc'
    })

    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', { headers });
      
  }
}
