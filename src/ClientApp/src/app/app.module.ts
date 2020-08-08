import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { VotersGuideComponent } from './voters-guide/voters-guide.component';
import { FooterComponent } from './footer/footer.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './state/effects';
import { appStateReducer } from './state/reducers';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareCardComponent } from './share-card/share-card.component';
import { DonateCardComponent } from './donate-card/donate-card.component';
import { PollingStationCardInfoComponent } from './polling-station-card-info/polling-station-card-info.component';
import { PollingStationSearchComponent } from './polling-station-search/polling-station-search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HereAddressService } from './services/here-address.service';
import { DataService } from './services/data.service';
import { MatInputModule, MatPaginatorModule, MatTableModule, MatSelect, MatSelectModule } from '@angular/material';
import { AuthEffects } from './state/auth';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { ImportPollingStationsComponent } from './import-polling-stations/import-polling-stations.component';
import { ImportedPollingStationsTableComponent } from './import-polling-stations/imported-polling-stations-table/imported-polling-stations-table.component';
import { ToasterService } from './services/toaster.service';

const materialImports = [
  MatAutocompleteModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatSelectModule
];

const appRoutes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'termeni-si-conditii', component: TermsAndConditionsComponent, pathMatch: 'full' },
  { path: 'politica-de-confidentialitate', component: PrivacyPolicyComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'admin/content', component: AdminContentComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'admin/import', component: ImportPollingStationsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'admin/login', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    GeneralInfoComponent,
    VotersGuideComponent,
    FooterComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ShareCardComponent,
    DonateCardComponent,
    PollingStationCardInfoComponent,
    PollingStationSearchComponent,
    LoginComponent,
    AdminComponent,
    AdminContentComponent,
    ImportPollingStationsComponent,
    ImportedPollingStationsTableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ data: appStateReducer }),
    EffectsModule.forRoot([ApplicationEffects, AuthEffects]),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    ...materialImports,
    AngularEditorModule,
  ],
  providers: [
    HereAddressService,
    DataService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
