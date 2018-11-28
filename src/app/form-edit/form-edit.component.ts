import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {HeroInterFaces} from '../heroes-component/hero-interfaces';
import {HeroService} from '../app-services/hero-services/hero.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';

@Component({
    selector: 'app-form-edit',
    templateUrl: './form-edit.component.html',
    styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
    heroToEdit: HeroInterFaces;
    validatingForm: FormGroup;
    submitted = false;
    progressRef: NgProgressRef;

    constructor(private heroServices: HeroService, private route: ActivatedRoute
        , private formBuilder: FormBuilder, private router: Router, public ngProgress: NgProgress) {
    }

    ngOnInit() {
        this.progressRef = this.ngProgress.ref();
        this.getHeroToEdit();
        this.validatingForm = this.formBuilder.group({
            nameHero: [null, [Validators.required]],
            realName: [null, [Validators.required]],
            slogan: [null, [Validators.required]],
            hashtag: [null, [Validators.required]],
            lover: [null, [Validators.required]],
            Dob: [null, [Validators.required]],
            summary: [null, [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields

    get f() {
        return this.validatingForm.controls;
    }

    getHeroToEdit() {
        this.progressRef.start();
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroServices.getHeroesDashBoardById(id).subscribe(
            heroesDashBoard => {
                this.heroServices.getGeneralInfoByID(id).subscribe(
                    generalInfo => {
                        this.heroServices.getHeroDetail(id).subscribe(
                            heroDetail => {
                                this.heroToEdit = Object.assign({}, heroesDashBoard['data'], generalInfo['data'], heroDetail['data']);
                                console.log(this.heroToEdit);
                                this.progressRef.complete();
                            }
                        );
                    }
                );
            }
        );
    }

    onSubmit() {
        this.submitted = true;
        if (this.validatingForm.invalid) {
            return;
        }
        this.progressRef.start();
    }

    navigateToHeroList() {
        this.router.navigate(['heroesList']);
    }
}
