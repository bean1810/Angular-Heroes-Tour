import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../app-services/hero-services/hero.service';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html',
    styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {
    hero: HeroInterFaces;
    progressRef: NgProgressRef;
    skeleton = false;

    constructor(private route: ActivatedRoute, private location: Location, private HeroServices: HeroService
        , public ngProgress: NgProgress) {
    }

    ngOnInit() {
        this.progressRef = this.ngProgress.ref();
        this.getHeroesDetail();
    }

    getHeroesDetail(): void {
        this.progressRef.start();
        const id = +this.route.snapshot.paramMap.get('id');
        this.HeroServices.getHeroDetail(id).subscribe(
            heroDetail => {
                this.HeroServices.getGeneralInfoByID(id).subscribe(
                    generalHero => {
                        heroDetail['data'].characteristics = JSON.parse(heroDetail['data'].characteristics);
                        this.hero = Object.assign({}, heroDetail['data'], generalHero['data']);
                        this.progressRef.complete();
                        this.skeleton = true;
                    }
                );
            }
        );
    }
}
