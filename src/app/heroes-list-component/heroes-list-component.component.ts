import {Component, OnInit} from '@angular/core';
import {HeroService} from '../app-services/hero-services/hero.service';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';

@Component({
    selector: 'app-heroes-list-component',
    templateUrl: './heroes-list-component.component.html',
    styleUrls: ['./heroes-list-component.component.scss']
})
export class HeroesListComponentComponent implements OnInit {
    heroProperties: HeroInterFaces[];
    progressRef: NgProgressRef;
    skeleton = false;
    skeletonData = new Array(5);

    constructor(private HeroServices: HeroService, public ngProgress: NgProgress) {
    }

    heroToDelete: HeroInterFaces;

    ngOnInit() {
        this.progressRef = this.ngProgress.ref();
        this.getHeroList();
    }

    getHeroList() {
        this.progressRef.start();
        this.HeroServices.getHeroList().subscribe(
            heroList => {
                this.heroProperties = heroList;
                this.skeleton = true;
                this.progressRef.complete();
            }
        );
    }

    deleteHero($even) {
        this.heroToDelete = $even;
        console.log(this.heroToDelete);
        this.heroProperties = this.heroProperties.filter(h => h !== this.heroToDelete);
        this.HeroServices.deleteHero(this.heroToDelete).subscribe();
    }
}
