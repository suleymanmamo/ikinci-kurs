import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataBindingComponent } from "./data-binding.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: DataBindingComponent }];

@NgModule({
  declarations: [DataBindingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DataBindingModule {}
