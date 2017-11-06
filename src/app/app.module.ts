import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './services/movies.service';
import { AuthService } from './services/auth-service'

import 'hammerjs';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieComponent } from './components/movie/movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { ActorComponent } from './components/actor/actor.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { environment } from '../environments/environment';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatMenuModule
} from '@angular/material';
import { ModalComponent } from './components/ui/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieComponent,
    GenresComponent,
    ActorComponent,
    LoginComponent,
    PageNotFoundComponent,
    CapitalizePipe,
    GenresListComponent,
    RegisterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [MoviesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
