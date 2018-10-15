import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {HeroInterFaces} from '../../heroes-component/hero-interfaces';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {
                id: 1,
                avatar: 'tony-stark.png',
                nameHeroes: 'Iron Man',
                color: 'red-text',
                realName: 'Tony Stark',
                lover: 19900,
                images: 'iron-man',
                imagesList: '../../assets/images/heroes/Ironman/Tony-stark-i-am-iron-man.jpg',
                summary: 'Iron Man is a fictional superhero appearing in ' +
                'American comic books published by Marvel Comics. ' +
                'The character was created by writer and editor Stan Lee.',
                rank: 1
            },
            {
                id: 2,
                avatar: 'doctor-strange.png',
                nameHeroes: 'Dr.Strange',
                color: 'orange-text',
                realName: 'Stephen Vincent Strange',
                lover: 229900,
                images: 'doctor-strange',
                imagesList: '../../assets/images/heroes/doctor-Strange/doctor-strange.jpg',
                summary: 'Doctor Stephen Vincent Strange is ' +
                'a fictional superhero appearing in ' +
                'American comic books published by ' +
                'Marvel Comics. Created by artist Steve ' +
                'Ditko and writer Stan Lee.',
                rank: 2
            },
            {
                id: 3,
                avatar: 'hulk-avatar.jpg',
                nameHeroes: 'The Incredible Hulk',
                color: 'green-text',
                realName: 'David Bruce Banner',
                lover: 239402,
                images: 'hulk',
                imagesList: '../../assets/images/heroes/Hulk/hulk.jpg',
                summary: 'David Bruce Banner, M.D., Ph.D., is a' +
                ' physician and scientist employed at the Culver Institute ' +
                'who is traumatized by the car accident that killed his beloved ' +
                'wife, Laura (played by Lara Parker).',
                rank: 3
            },
            {
                id: 4,
                avatar: 'hulk-avatar.jpg',
                nameHeroes: 'The Incredible Hulk',
                color: 'green-text',
                realName: 'David Bruce Banner',
                lover: 239402,
                images: 'hulk',
                imagesList: '../../assets/images/heroes/Hulk/hulk.jpg',
                summary: 'David Bruce Banner, M.D., Ph.D., is a' +
                ' physician and scientist employed at the Culver Institute ' +
                'who is traumatized by the car accident that killed his beloved ' +
                'wife, Laura (played by Lara Parker).',
                rank: 3
            }
        ];
        const heroesList = [
            {
                id: 1,
                realName: 'Tony Stark',
                imagesList: '../../assets/images/heroes/Ironman/Tony-stark-i-am-iron-man.jpg',
                summary: 'Iron Man is a fictional superhero appearing in ' +
                'American comic books published by Marvel Comics. ' +
                'The character was created by writer and editor Stan Lee.'
            },
            {
                id: 2,
                realName: 'Stephen Vincent Strange',
                imagesList: '../../assets/images/heroes/doctor-Strange/doctor-strange.jpg',
                summary: 'Doctor Stephen Vincent Strange is ' +
                'a fictional superhero appearing in ' +
                'American comic books published by ' +
                'Marvel Comics. Created by artist Steve ' +
                'Ditko and writer Stan Lee.'
            },
            {
                id: 3,
                realName: 'David Bruce Banner',
                imagesList: '../../assets/images/heroes/Hulk/hulk.jpg',
                summary: 'David Bruce Banner, M.D., Ph.D., is a' +
                ' physician and scientist employed at the Culver Institute ' +
                'who is traumatized by the car accident that killed his beloved ' +
                'wife, Laura (played by Lara Parker).'
            },
            {
                id: 4,
                realName: 'David Bruce Banner',
                imagesList: '../../assets/images/heroes/Hulk/hulk.jpg',
                summary: 'David Bruce Banner, M.D., Ph.D., is a' +
                ' physician and scientist employed at the Culver Institute ' +
                'who is traumatized by the car accident that killed his beloved ' +
                'wife, Laura (played by Lara Parker).'
            }
        ];
        return {heroes, heroesList};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: HeroInterFaces[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
