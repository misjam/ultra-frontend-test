import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class GiphyService implements Resolve<boolean> {

    private readonly GIPHY_API = "https://api.giphy.com/v1/gifs/trending?api_key=xnAAR5y4xu0T7PmPz3Ki7bZKi3MorJQF";

    private giphsSubject = new BehaviorSubject([]);
    public giphs$ = this.giphsSubject.asObservable();

    constructor(
        private http: HttpClient
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.http.get(this.GIPHY_API).pipe(map((res: any) => {
            this.giphsSubject.next(res);
            return res;
        }))

    }
}