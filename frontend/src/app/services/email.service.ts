import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface EmailData {
  fullName: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendEmail(emailData: EmailData): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, emailData);
  }
}
