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
    private heroPrefixUrl = 'http://localhost:3000/api/heroesMarvel';
    private heroGeneralInfo = 'generalInfo';
    private heroDashBoard = 'getAllHeroesInDashboard';
    private heroList = 'getAllHeroesList';
    private heroDetail = 'getHeroDetail';
    private updateHero = 'updateHero';
    constructor(private http: HttpClient, private messageService: MessagesService) {
    }

    getAllGeneralInfo(): Observable<HeroInterFaces[]> {
        const heroAllGeneralInfo = `${this.heroPrefixUrl}/${this.heroGeneralInfo}`;
        return this.http.get<HeroInterFaces[]>(heroAllGeneralInfo).pipe(
            tap(() => this.log(`fetched all heroes dashboard`)),
            catchError(this.handleError('getAllGeneralInfo', []))
        );
    }

    getGeneralInfoByID(id: number): Observable<HeroInterFaces> {
        const heroGeneralInfoByIDUrl = `${this.heroPrefixUrl}/${this.heroGeneralInfo}/${id}`;
        return this.http.get<HeroInterFaces>(heroGeneralInfoByIDUrl).pipe(
            tap(hero => this.log(`fetched hero ${hero.nameHero}`)),
            catchError(this.handleError<HeroInterFaces>('getGeneralInfoByID'))
        );
    }

    getHeroesDashBoard(): Observable<HeroInterFaces[]> {
        const heroDashBoardUrl = `${this.heroPrefixUrl}/${this.heroDashBoard}`;
        return this.http.get<HeroInterFaces[]>(heroDashBoardUrl).pipe(
            tap(heroes => this.log(`fetched hero : ${heroes}`)),
            catchError(this.handleError('getHeroes', []))
        );
    }

    getHeroesDashBoardById(id: number): Observable<HeroInterFaces> {
        const heroDashBoardUrl = `${this.heroPrefixUrl}/${this.heroDashBoard}/${id}`;
        return this.http.get<HeroInterFaces>(heroDashBoardUrl).pipe(
            tap(hero => this.log(`fetched heroes : ${hero}`)),
            catchError(this.handleError<HeroInterFaces>('getHeroesDashBoardById'))
        );
    }

    getHeroDetail(id: number): Observable<HeroInterFaces> {
        const heroDetailUrl = `${this.heroPrefixUrl}/${this.heroDetail}/${id}`;
        return this.http.get<HeroInterFaces>(heroDetailUrl).pipe(
            tap(heroes => this.log(`fetched hero : ${heroes}`)),
            catchError(this.handleError<HeroInterFaces>('getHeroDetail'))
        );
    }

    getHeroList(): Observable<HeroInterFaces[]> {
        const heroListUrl = `${this.heroPrefixUrl}/${this.heroList}`;
        return this.http.get<HeroInterFaces[]>(heroListUrl).pipe(
            tap(heroes => this.log(`fetched list heroes : ${heroes}`)),
            catchError(this.handleError('getListHeroes', []))
        );
    }

    /*delete hero service*/
    deleteHero(hero: HeroInterFaces | number): Observable<HeroInterFaces> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroPrefixUrl}/${id}`;

        return this.http.delete<HeroInterFaces>(url, httpOptions).pipe(
            tap(heroes => this.log(`delete Hero  : ${heroes.nameHero}`)),
            catchError(this.handleError<HeroInterFaces>('deleteHero'))
        );
    }

    /*Update Hero Service*/
    updateHeroFunc(hero: HeroInterFaces): Observable<any> {
        const url = `${this.heroPrefixUrl}/${this.updateHero}`;
        return this.http.put(url, hero, httpOptions).pipe(
            tap(() => this.log(`updated hero :` )),
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
