import {Injectable} from '@angular/core';
import {HeroInterFaces} from '../../heroes-component/hero-interfaces';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/internal/operators';
import {MessagesService} from '../messages-services/messages.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    /*Url to web api*/
    private heroesUrl = 'api/heroes';
    private heroesListUrl = 'api/heroesList';
    private heroesDetailUrl = 'api/heroesDetail';

    constructor(private http: HttpClient, private messageService: MessagesService) {
    }

    getHeroes(): Observable<HeroInterFaces[]> {
        return this.http.get<HeroInterFaces[]>(this.heroesUrl).pipe(
            tap(heroes => this.log(`fetched hero : ${heroes}`)),
            catchError(this.handleError('getHeroes', []))
        );
    }

    getHeroDetail(id: number): Observable<HeroInterFaces> {
        const url = `${this.heroesDetailUrl}/${id}`;
        return this.http.get<HeroInterFaces>(url).pipe(
            tap(heroes => this.log(`fetched hero : ${heroes}`)),
            catchError(this.handleError<HeroInterFaces>('getHeroDetail'))
        );
    }

    getHeroList(): Observable<HeroInterFaces[]> {
        return this.http.get<HeroInterFaces[]>(this.heroesListUrl).pipe(
            tap(heroes => this.log(`fetched list heroes : ${heroes}`)),
            catchError(this.handleError('getListHeroes', []))
        );
    }

    getHeroListById(id: number): Observable<HeroInterFaces> {
        const url = `${this.heroesListUrl}/${id}`;
        return this.http.get<HeroInterFaces>(url).pipe(
            tap(hero => this.log(`fetched hero : ${hero.nameHeroes}`)),
            catchError(this.handleError<HeroInterFaces>('getHeroListById'))
        );
    }

    /*delete hero service*/
    deleteHero(hero: HeroInterFaces | number): Observable<HeroInterFaces> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete<HeroInterFaces>(url, httpOptions).pipe(
            tap(heroes => this.log(`delete Hero  : ${heroes.nameHeroes}`)),
            catchError(this.handleError<HeroInterFaces>('deleteHero'))
        );
    }

    /*Update Hero Service*/
    updateHero(hero: HeroInterFaces): Observable<any> {
        return this.http.put(this.heroesListUrl, hero, httpOptions).pipe(
            tap(() => this.log(`updated hero : ${hero.nameHeroes}` )),
            catchError(this.handleError('updateHeroService'))
        );
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error);

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
