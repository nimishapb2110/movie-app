import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StringToArrayPipe } from './shared/pipes/string-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    SearchComponent,
    HeaderComponent,
    MovieCardComponent,
    SearchBarComponent,
    MovieDetailComponent,
    StringToArrayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
