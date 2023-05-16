import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SkyIfspRoutingModule } from "./sky-ifsp.routing.module";
import { TelaHomeComponent } from "../../src/project/tela-home/tela-home.component";

@NgModule({
  declarations: [TelaHomeComponent],
  imports: [BrowserModule, SkyIfspRoutingModule],
  providers: [],
  bootstrap: []
})
export class SkyIfspModule {}
