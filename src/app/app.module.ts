import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgProgressModule} from '@ngx-progressbar/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponentComponent} from './header-component/header-component.component';
import {FooterComponentComponent} from './footer-component/footer-component.component';
import {DashboardComponent} from './dashboard-component/dashboard-component.component';
import {HeroesComponentComponent} from './heroes-component/heroes-component.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HeroesListComponentComponent} from './heroes-list-component/heroes-list-component.component';
import {CardItemComponent} from './card-item/card-item.component';
import {HeroesDetailComponent} from './heroes-detail/heroes-detail.component';

import {HttpClientModule} from '@angular/common/http';
import {FormEditComponent} from './form-edit/form-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponentComponent,
        FooterComponentComponent,
        DashboardComponent,
        HeroesComponentComponent,
        HeroesListComponentComponent,
        CardItemComponent,
        HeroesDetailComponent,
        FormEditComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot(),
        NgProgressModule.forRoot({
            spinner: false,
            color: '#269ff4',
            thick: true,
            fixed: false,
            meteor: false
        }),
        AppRoutingModule,
        HttpClientModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
