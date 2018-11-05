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
                imagesDashboard: '../../assets/images/heroes/Ironman/iron-man-dashboard.jpeg',
                rank: 4,
                slogan: 'Genius, Billionaire, Playboy, Philanthropist.',
                hashtag: 'CREATION'
            },
            {
                id: 2,
                avatar: 'doctor-strange.png',
                nameHeroes: 'Doctor Strange',
                color: 'orange-text',
                realName: 'Stephen Vincent Strange',
                lover: 229900,
                imagesDashboard: '../../assets/images/heroes/doctor-Strange/doctor-strange.png',
                rank: 2,
                slogan: 'Forget everything that you think you know.',
                hashtag: 'MAGIC'
            },
            {
                id: 3,
                avatar: 'hulk-avatar.png',
                nameHeroes: 'The Incredible Hulk',
                color: 'green-text',
                realName: 'David Bruce Banner',
                lover: 239402,
                imagesDashboard: '../../assets/images/heroes/Hulk/incredible-hulk-wallpaper.jpg',
                rank: 3,
                slogan: 'I just get so angry all the time! Hulk always... always angry',
                hashtag: 'SMASH'
            },
            {
                id: 4,
                avatar: 'thanos-avatar.png',
                nameHeroes: 'The Mad Titan',
                color: 'purple-text',
                realName: 'No dual identity',
                lover: 989898989,
                imagesDashboard: '../../assets/images/heroes/thanos/thanos-wallpaper.jpg',
                rank: 1,
                slogan: 'When I’m done, half of humanity will still exist. Perfectly balanced, as all things should be. ' +
                        'I hope they remember you.',
                hashtag: 'MAD TITAN'
            },
            {
                id : 5,
                avatar : 'captain-america.png',
                nameHeroes: 'Captain America',
                color: 'blue-text',
                realName: 'Steve Rogers',
                lover: 10000000,
                imagesDashboard: '../../assets/images/heroes/captain-america/captain-america-dashboard.jpg',
                rank: 5,
                slogan: 'I don’t want to kill anyone. I don’t like bullies; I don’t care where they’re from.',
                hashtag: 'JUSTICE'
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
                realName: 'The Mad Titan',
                imagesList: '../../assets/images/heroes/thanos/Josh-Brolin-Cannes.jpg',
                summary: 'The Mad Titan called Thanos is known across all reality as one of the most powerful beings in ' +
                    'existence. Obsessed with order and fate, the god works tirelessly to bring all living things to heel—to ' +
                    'make the universe as he sees it should be.'
            },
            {
                id: 5,
                realName: 'Steve Rogers',
                imagesList: '../../assets/images/heroes/captain-america/captain-america-list.jpg',
                summary: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a ' +
                    '"Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger ' +
                    'and a terrorist organization.'
            }
        ];
        const heroesDetail = [
            {
                id: 1,
                realName: 'Tony Stark',
                nameHeroes: 'Shellhead, Golden Avenger',
                imagesDetail: '../../assets/images/heroes/Ironman/iron-man-detail.jpg',
                summary: 'A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a ' +
                    'severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruct' +
                    'ion, he instead creates a powered suit of armor to save his life and escape captivity. Later, Stark develops his ' +
                    'suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses ' +
                    'the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, ' +
                    'Stark eventually declared that he was, in fact, Iron Man in a public announcement.',
                Dob: 'March 1963',
                Characteristics: [
                    {color: 'danger', characteristics: 'Flight'},
                    {color: 'info', characteristics: 'Artificial Intelligence'},
                    {color: 'secondary', characteristics: 'Armored Suit'},
                    {color: 'warning', characteristics: 'Super Strength + Durability'},
                ]
            },
            {
                id: 2,
                realName: 'Stephen Vincent Strange',
                nameHeroes: 'Doctor Strange: The Sorcerer Supreme',
                imagesDetail: '../../assets/images/heroes/doctor-Strange/doctor-strange-detail.jpg',
                summary: 'Stephen Strange was a surgeon whose career was cut short when his steady hands were damaged in an ' +
                    'accident. Seeking a cure to fix his hands that conventional medicine could not provide, Strange ' +
                    'embarked on a quest to find the Ancient One, which saw him become Master of the Mystic Arts! Sworn ' +
                    'to protect this world from other-worldly threats, Strange remains vigilant as Earth\'s mystical protector.',
                Dob: 'July 1963',
                Characteristics: [
                    {color: 'danger', characteristics: 'Magic'},
                    {color: 'info', characteristics: 'Utilization of Eye of Agamotto'},
                    {color: 'secondary', characteristics: 'Cloak of Levitation'},
                    {color: 'warning', characteristics: 'Astral Projection'}
                ]
            },
            {
                id: 3,
                realName: 'David Bruce Banner',
                nameHeroes: 'Robert Bruce Banner, Breaker of Worlds',
                imagesDetail: '../../assets/images/heroes/Hulk/hulk-detail.jpg',
                summary: 'The child of an abusive father, Bruce Banner grew up shy and introverted, yet a scientific genius. ' +
                    'As a young man, thanks to his standout work in the field of nuclear physics, he attracted the attention of the U.S. ' +
                    'Army who wanted to adapt his theories for weaponry. Banner resisted such notions, but failed attempts at landing ' +
                    'steady work convinced him to accept a position at a federal nuclear research facility at a missile base in the ' +
                    'New Mexico desert',
                Dob: 'May 1962',
                Characteristics: [
                    {color: 'danger', characteristics: 'Superhuman Strength'},
                    {color: 'info', characteristics: 'Long Distance Jumping'},
                    {color: 'secondary', characteristics: 'Hulk Smash'},
                    {color: 'warning', characteristics: 'Durability and Regeneration'}
                ]
            },
            {
                id: 4,
                realName: 'No dual identity',
                nameHeroes: 'The Mad Titan',
                imagesDetail: '../../assets/images/heroes/thanos/thanos-detail.jpg',
                summary: 'A native of the planet Titan, Thanos saw the danger his people were in from overpopulation and suggested' +
                    ' a severe solution—the elimination of half the population, at random and without prejudice, in order to make life' +
                    ' better for the planet as a whole. He was shunned as a madman, but his planet did indeed eventually die, lacking ' +
                    'the resources needed to keep up with the demands.',
                Dob: 'February 1973',
                Characteristics: [
                    {color: 'danger', characteristics: 'Enhanced Strength'},
                    {color: 'info', characteristics: 'Master Tactician'},
                    {color: 'secondary', characteristics: 'Infinity Gauntlet'},
                    {color: 'warning', characteristics: 'Immortality'}
                ]
            },
            {
                id: 5,
                realName: 'Steve Rogers',
                nameHeroes: 'Captain America',
                imagesDetail: '../../assets/images/heroes/captain-america/captain-america-detail.jpg',
                summary: 'Envious of his friend Bucky Barnes’ military enlistment, and undeterred by his own multiple rejections ' +
                    'by the U.S. Army, physical weakling Steve Rogers made one more attempt to join the march of men to fight for ' +
                    'their country in the dark days of World War II. Rogers’ valiant wish to fight bullies wherever they were grabbed ' +
                    'the attention of scientist Dr. Abraham Erskine, and he handpicked the idealistic young man for the Army’s ' +
                    'Super-Soldier program under his supervision.',
                Dob: 'March 1941',
                Characteristics: [
                    {color: 'danger', characteristics: 'Speed & Stamina'},
                    {color: 'info', characteristics: 'Skilled Fighter'},
                    {color: 'secondary', characteristics: 'Acrobat'},
                    {color: 'warning', characteristics: 'Vibranium Shield'}
                ]
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
