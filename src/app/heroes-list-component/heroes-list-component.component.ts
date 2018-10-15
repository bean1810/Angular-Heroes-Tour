import {Component, OnInit} from '@angular/core';
import {HeroService} from '../app-services/hero-services/hero.service';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';

@Component({
    selector: 'app-heroes-list-component',
    templateUrl: './heroes-list-component.component.html',
    styleUrls: ['./heroes-list-component.component.scss']
})
export class HeroesListComponentComponent implements OnInit {
    heroProperties: HeroInterFaces[];

    constructor(private HeroServices: HeroService) {
    }

    ngOnInit() {
        this.getHeroList();
    }

    getHeroList() {
        this.HeroServices.getHeroList().subscribe(
            heroList => this.heroProperties = heroList
        );
    }
}
