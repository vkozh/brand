import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { TypesComponent } from './types/types.component';
import { ColorsComponent } from './colors/colors.component';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplatesComponent } from './templates/templates.component';
import { LogosComponent } from './logos/logos.component';
import { DecaComponent } from './deca/deca.component';
import { RubikComponent } from './rubik/rubik.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuContentComponent } from './menu-content/menu-content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';


const routes = [
  {path: '', component: GuideComponent},
  {path: 'types', component: TypesComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'logos', component: LogosComponent},
  {path: 'types/deca', component: DecaComponent},
  {path: 'types/rubik', component: RubikComponent},
  {path: 'philosophy', component: PhilosophyComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    GuideComponent,
    TypesComponent,
    LogosComponent,
    DecaComponent,
    RubikComponent,
    PhilosophyComponent,
    ColorsComponent,
    MenuContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FontAwesomeModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
