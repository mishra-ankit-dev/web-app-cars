import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WebShellModule } from './shell/web/web-shell.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, WebShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
