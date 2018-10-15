import {Component, OnInit} from '@angular/core';
import {HEROES} from './mock-heroes';
import {HeroInterFaces} from './hero-interfaces';
import {HeroService} from '../app-services/hero-services/hero.service';

@Component({
    selector: 'app-itemspanel-component',
    templateUrl: './heroes-component.component.html',
    styleUrls: ['./heroes-component.component.scss']
})
export class ItemspanelComponentComponent implements OnInit {
    heroes: HeroInterFaces[];

    constructor(private HeroServices: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    // function to retrieve the heroes from the service.
    getHeroes(): void {
        this.HeroServices.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

}
