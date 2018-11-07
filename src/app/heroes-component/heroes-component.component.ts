import {Component, OnInit} from '@angular/core';
import {HeroInterFaces} from './hero-interfaces';
import {HeroService} from '../app-services/hero-services/hero.service';

@Component({
    selector: 'app-heroes-component',
    templateUrl: './heroes-component.component.html',
    styleUrls: ['./heroes-component.component.scss']
})
export class HeroesComponentComponent implements OnInit {
    heroes: HeroInterFaces[];
    skeleton = true;
    skeletonData = new Array(5);

    constructor(private HeroServices: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    // function to retrieve the heroes from the service.
    getHeroes(): void {
        setTimeout(() => {
            this.HeroServices.getHeroes().subscribe(heroes => {
                this.heroes = heroes.sort((a, b) => {
                    return a.rank - b.rank;
                });
                this.skeleton = false;
            });
        }, 1000);
    }

}
