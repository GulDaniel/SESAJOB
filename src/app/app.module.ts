import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { SkyIfspModule } from "../../src/project/sky-ifsp.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SkyIfspModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
