import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainBannerComponent } from './Components/main-banner/main-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomemainComponent } from './Components/homemain/homemain.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeTipsComponent } from './Components/home-tips/home-tips.component';
import { MoviesNewReleaseComponent } from './components/movies-new-release/movies-new-release.component';
import { TrendingComponent } from './components/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    HomemainComponent,
    HomeTipsComponent,
    MoviesNewReleaseComponent,
    TrendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
