import { NgModule } from "@angular/core";
import { ReactiveFormsExampleComponent } from "./reactive-forms-example.component";
import { Route, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

const reactiveFormsRoute: Route[] = [
  {
    path: "reactive-forms",
    component: ReactiveFormsExampleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(reactiveFormsRoute)
  ],
  declarations: [ReactiveFormsExampleComponent]
})
export class ReactiveFormsExampleModule {}
