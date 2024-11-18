import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { JwtRequest } from '../models/jwtRequest';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,@Inject(PLATFORM_ID) private platformId: Object
) { }
  login(request: JwtRequest) {
    return this.http.post('http://localhost:8082/login', request);
  }
  verificar() {
    if (isPlatformBrowser(this.platformId)) {
      let token = sessionStorage.getItem('token');
      return token != null;
    }
    return false;
  }
  showRole() {
    if (isPlatformBrowser(this.platformId)) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        // Manejar el caso en el que el token es nulo.
        return null; // O cualquier otro valor predeterminado dependiendo del contexto.
      }
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken?.role;
    }
    return null;
  }
  //MIO para obtener el username y mostrarlo
  getUsername() {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('username');
    }
    return null;
  }
}
