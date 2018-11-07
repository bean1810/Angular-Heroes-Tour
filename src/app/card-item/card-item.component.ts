import {Component, OnInit, Input, AfterViewInit, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';
import * as $ from 'jquery';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit, AfterViewInit, AfterContentInit {
    @Input() heroesData: HeroInterFaces;
    @Input() skeleton;
    @Input() skeletonData;
    @ViewChild('wrapper') wrapper: ElementRef;
    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    ngAfterContentInit() {
    }
}
