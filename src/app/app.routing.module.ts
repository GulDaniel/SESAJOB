import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SkyIfspModule } from "../../src/project/sky-ifsp.module";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("src/project/sky-ifsp.module").then((m) => m.SkyIfspModule)
  }
];

@NgModule({
  imports: [SkyIfspModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
