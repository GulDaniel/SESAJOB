import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TelaHomeComponent } from "./tela-home/tela-home.component";

const routes: Routes = [{ path: "", component: TelaHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SkyIfspRoutingModule {}
