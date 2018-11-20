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
    heroes: Array<HeroInterFaces> = [];
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
        this.HeroServices.getHeroesDashBoard().subscribe(heroesDashBoard => {
            this.HeroServices.getAllGeneralInfo().subscribe(
                generalInfo => {
                    for (let i = 0; i < generalInfo['data'].length; i++) {
                        const result = Object.assign({}, heroesDashBoard['data'][i], generalInfo['data'][i]);
                        this.heroes.push(result);
                    }
                    this.heroes.sort((a, b) => {
                        return b.lover - a.lover;
                    });
                    this.progressRef.complete();
                    this.skeleton = false;
                }
            );
        });
    }

}
