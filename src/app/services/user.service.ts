import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  password_hash: string;
  location: string;
  role: string;
  is_verified: string;
  is_active: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://34.28.54.211:8080/users';

  constructor(private http: HttpClient) {}

  // GET all registered users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // POST create a new user (signup)
  createUser(formData: any): Observable<any> {
  const payload = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    date_of_birth: formData.dateOfBirth,
    gender: formData.gender ?? "M",
    primary_phone: formData.phone,
    secondary_phone: "",
    email: formData.email,
    password_hash: formData.password,
    location: formData.location ?? "",
    role: "patient",
    is_verified: "N",
    is_active: "Y"
  };

  console.log("📤 Sending payload to backend:", payload);

  return this.http.post(this.apiUrl, payload);
}

  }

