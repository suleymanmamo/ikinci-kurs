import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoteComponent } from "./rote/rote.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  { path: "rote", component: RoteComponent },
  {
    path: "data-binding",
    loadChildren: () =>
      import("./data-binding/data-binding.module").then(
        (m) => m.DataBindingModule
      ),
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "storage",
    loadChildren: () =>
      import("./storage/storage.module").then((m) => m.StorageModule),
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
