import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoteComponent } from "./rote/rote.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "rote", component: RoteComponent },
  { path: "user", component: UserComponent },
  { path: "user/:id", component: UserDetailComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
