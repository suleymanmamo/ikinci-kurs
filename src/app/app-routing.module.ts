import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthExitGuard, AuthGuard } from "src/libs";
import { HomeComponent } from "./home/home.component";
import { RoteComponent } from "./rote/rote.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "rote",
    loadChildren: () => import("./rote/role.module").then((m) => m.RoleModule),
  },
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
    canActivate: [AuthGuard],
  },
  {
    path: "pipes",
    loadChildren: () =>
      import("./pipes/pipes.module").then((m) => m.PipesModule),
    canDeactivate: [AuthExitGuard],
  },
  {
    path: "parents",
    loadChildren: () =>
      import("./parents/parents.module").then((m) => m.ParentsModule),
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./forms/forms.module").then((m) => m.AngularFormsModule),
  },
  {
    path: "map",
    loadChildren: () => import("./map/map.module").then((m) => m.MapModule),
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
