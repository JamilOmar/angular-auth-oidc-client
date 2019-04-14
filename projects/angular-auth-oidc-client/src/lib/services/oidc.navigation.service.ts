import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


/**
 * Implement this class-interface to create a custom storage.
 */
@Injectable()
export abstract class OidcNavigationService {
    /**
     * This method must contain the logic to navigate
     * @param key
     * @param url
     */
    public abstract navigate(url: string): void;
}
@Injectable()
export class OidcNavigationRouteService {
    constructor(private router: Router) { }
    navigate(url: string) {
        this.router.navigate([url]);
    }
}
