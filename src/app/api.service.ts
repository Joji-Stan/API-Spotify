import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})

// Service Api pour ensuite se servir des differents GET notamment pour récuperer les statistiques de l'utilisateur
export class ApiService {

  // Les différentes variables
  access_token: string;
  usersName: string;
  userProfilePicture: string;
  artistList: any = [];

  topArtist4Weeks: string;
  topArtist4WeeksLink: string;
  topArtistImage4Weeks: string;
  topTrack4Weeks: string;
  topTrack4WeeksLink: string;
  topTrackImage4Weeks: string;

  topArtist6Months: string;
  topArtist6MonthsLink: string;
  topArtistImage6Months: string;
  topTrack6Months: string;
  topTrack6MonthsLink: string;
  topTrackImage6Months: string;

  topArtistAllTime: string;
  topArtistAllTimeLink: string;
  topArtistImageAllTime: string;
  topTrackAllTime: string;
  topTrackAllTimeLink: string;
  topTrackImageAllTime: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getAccessToken(token: string) {
    this.route.queryParams
    this.access_token = token;
  }

  getUserInfo() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });

    return this.http.get("https://api.spotify.com/v1/me/", { headers });
  }

  getTopArtist4Weeks() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50`,
      { headers: headers }
    );
  }

  getTopTrack4Weeks() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50&offset=0`,
      { headers: headers  }
    );
  }

  getTopArtist6Months() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`,
      { headers }
    );
  }

  getTopTrack6Months() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50`,
      { headers }
    );
  }

  getTopArtistAllTime() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50`,
      { headers }
    );
  }

  getTopTrackAllTime() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50`,
      { headers }
    );
  }

  getUserTracks(offset: bigint) {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.access_token,
    });
    return this.http.get(
      `https://api.spotify.com/v1/me/tracks?limit=50&offset=${offset}`,
      { headers }
    );
  }
}
