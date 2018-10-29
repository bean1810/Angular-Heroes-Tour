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
                imagesDashboard: '../../assets/images/heroes/Ironman/ironMan_wallpaper.jpg',
                rank: 1
            },
            {
                id: 2,
                avatar: 'doctor-strange.png',
                nameHeroes: 'Dr.Strange',
                color: 'orange-text',
                realName: 'Stephen Vincent Strange',
                lover: 229900,
                imagesDashboard: '../../assets/images/heroes/doctor-Strange/doctor-strange.png',
                rank: 2
            },
            {
                id: 3,
                avatar: 'hulk-avatar.png',
                nameHeroes: 'The Incredible Hulk',
                color: 'green-text',
                realName: 'David Bruce Banner',
                lover: 239402,
                imagesDashboard: '../../assets/images/heroes/Hulk/incredible-hulk-wallpaper.jpg',
                rank: 3
            },
            {
                id: 4,
                avatar: 'hulk-avatar.jpg',
                nameHeroes: 'The Incredible Hulk',
                color: 'green-text',
                realName: 'David Bruce Banner',
                lover: 239402,
                imagesDashboard: '../../assets/images/heroes/Hulk/hulk.png',
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
        const heroesDetail = [
            {
                id: 1,
                realName: 'Tony Stark',
                nameHeroes: 'Iron Man',
                imagesDetail: '../../assets/images/heroes/Ironman/ironMan_wallpaper.jpg',
                summary: 'A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a ' +
                    'severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruct' +
                    'ion, he instead creates a powered suit of armor to save his life and escape captivity. Later, Stark develops his ' +
                    'suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses ' +
                    'the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, ' +
                    'Stark eventually declared that he was, in fact, Iron Man in a public announcement.',
                Dob: 'March 1963',
                Characteristics: [
                    {color: 'danger', characteristics: 'Genius'},
                    {color: 'info', characteristics: 'Complacent'},
                    {color: 'secondary', characteristics: 'Wealthy'},
                    {color: 'warning', characteristics: 'Handsome'},
                ],
            }
        ];
        return {heroes, heroesList, heroesDetail};
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
