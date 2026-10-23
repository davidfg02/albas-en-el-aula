import { Injectable, Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Inicializamos el estado en 'false' (visitante)
    private isLoggedIn = new BehaviorSubject<boolean>(true);

    // Esta es la variable pública que los componentes pueden "escuchar"
    isLoggedIn$ = this.isLoggedIn.asObservable();

    constructor() {

    }

    login() {
        this.isLoggedIn.next(true);
    }

    logout() {

        this.isLoggedIn.next(false);
    }
}
