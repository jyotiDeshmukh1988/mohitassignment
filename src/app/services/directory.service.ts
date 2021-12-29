import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  baseUrl: string = 'assets/directory.json';
  constructor(private http: HttpClient) {}

  getAllDirectories(): any {
    return this.http.get(this.baseUrl);
  }
}
