import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppComponent} from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ItemspanelComponentComponent } from './heroes-component/heroes-component.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeroesListComponentComponent } from './heroes-list-component/heroes-list-component.component';
import { CardItemComponent } from './card-item/card-item.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app-services/in-memory-data-service/in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponentComponent,
        FooterComponentComponent,
        DashboardComponentComponent,
        ItemspanelComponentComponent,
        HeroesListComponentComponent,
        CardItemComponent,
        HeroesDetailComponent,
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
