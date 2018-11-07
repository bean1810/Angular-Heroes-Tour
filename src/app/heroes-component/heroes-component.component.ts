import {Component, OnInit} from '@angular/core';
import {HeroInterFaces} from './hero-interfaces';
import {HeroService} from '../app-services/hero-services/hero.service';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';

@Component({
    selector: 'app-heroes-component',
    templateUrl: './heroes-component.component.html',
    styleUrls: ['./heroes-component.component.scss']
})
export class HeroesComponentComponent implements OnInit {
    heroes: HeroInterFaces[];
    skeleton = true;
    skeletonData = new Array(5);
    progressRef: NgProgressRef;

    constructor(private HeroServices: HeroService, public ngProgress: NgProgress) {
    }

    ngOnInit() {
        this.progressRef = this.ngProgress.ref();
        this.getHeroes();
    }

    // function to retrieve the heroes from the service.
    getHeroes(): void {
        this.progressRef.start();
        this.HeroServices.getHeroes().subscribe(heroes => {
            this.heroes = heroes.sort((a, b) => {
                return a.rank - b.rank;
            });
            this.progressRef.complete();
            this.skeleton = false;
        });
    }

}
