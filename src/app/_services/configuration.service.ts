import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  api_url: string;
  constructor() {
    this.api_url = 'http://localhost:50229';
  }

  public getApiUrl() {
    return this.api_url;
  }
}
