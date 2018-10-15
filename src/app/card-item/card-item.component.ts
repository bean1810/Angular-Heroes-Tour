import {Component, OnInit, Input} from '@angular/core';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
    @Input() heroProperties: HeroInterFaces;

    constructor() {
    }

    ngOnInit() {}

}
