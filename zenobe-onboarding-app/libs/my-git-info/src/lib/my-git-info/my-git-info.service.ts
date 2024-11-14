import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MyGitInfoService {
  constructor(private readonly httpService: HttpClient) {}

  getGitInfo() {
    return this.httpService.get<any>(
      'https://api.github.com/users/JoelEarps/repos'
    );
  }
}
