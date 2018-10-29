import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard-component/dashboard-component.component';
import {HeroesListComponentComponent} from '../heroes-list-component/heroes-list-component.component';
import {HeroesDetailComponent} from '../heroes-detail/heroes-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'heroesList', component: HeroesListComponentComponent},
    {path: 'detail/:id', component : HeroesDetailComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
