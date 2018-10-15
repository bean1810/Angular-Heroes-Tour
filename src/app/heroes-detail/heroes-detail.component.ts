import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../app-services/hero-services/hero.service';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html',
    styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {
    hero: HeroInterFaces;

    constructor(private route: ActivatedRoute, private location: Location, private HeroServices: HeroService) {
    }

    ngOnInit() {
        this.getHeroesDetail();
    }

    getHeroesDetail(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.HeroServices.getHeroDetail(id).subscribe(
            heroDetail => this.hero = heroDetail
        );
    }
}
