import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [AppComponent, TopbarComponent, PageContentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
