import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getFeaturedPlaylist() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBFm8pOiTrR4ePMb_i10QMAVtuCMe0zDvYpatyYFH2ohBP81Y6x_RYlnkG3bbOWf4fffbKbt_HUSee3X7o'
    })
    
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', { headers });
      
  }

  getArtist( word: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBFm8pOiTrR4ePMb_i10QMAVtuCMe0zDvYpatyYFH2ohBP81Y6x_RYlnkG3bbOWf4fffbKbt_HUSee3X7o'
    })
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${word}&type=artist&limit=10`, { headers });
      
  }
  
}
