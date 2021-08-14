import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DirectivesComponent } from "./directives/directives.component";

const routes: Routes = [{ path: "", component: DirectivesComponent }];

@NgModule({
  declarations: [DirectivesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class DirectivesModule {}
