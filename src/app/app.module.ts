import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { SceneComponent } from './scene/scene.component';
import { DirectorComponent } from './director/director.component';
import { drpoService } from './shared/drpoService.service';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    DirectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [drpoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
