import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { RoleService } from "src/libs";
import { SubSink } from "subsink";

@Component({
  selector: "app-rote",
  templateUrl: "./rote.component.html",
  styleUrls: ["./rote.component.scss"],
})
export class RoteComponent implements OnInit, OnDestroy {
  rolesData;
  subs1: Subscription;
  subs2: Subscription;
  private subs = new SubSink();

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getRoles();
  }

  ngOnDestroy(): void {
    this.subs1.unsubscribe();
    this.subs.unsubscribe();
  }

  getRoles() {
    this.subs1 = this.roleService.getAllRoles().subscribe((data) => {
      this.rolesData = data;
    });

    this.subs.add(
      this.roleService.getAllRoles().subscribe((data) => {
        this.rolesData = data;
      })
    );
  }

  addNewRole(roleForm: NgForm) {
    this.subs1.add(
      this.roleService.addRole(roleForm.value).subscribe(
        (data) => {
          this.getRoles();
        },
        (error) => {
          alert("bişiler yanış gitti");
        }
      )
    );

    this.subs.add(
      this.roleService.addRole(roleForm.value).subscribe(
        (data) => {
          this.getRoles();
        },
        (error) => {
          alert("bişiler yanış gitti");
        }
      )
    );
  }

  editRole(roleForm: NgForm) {
    this.roleService.editRole(roleForm.value).subscribe(
      (data) => {
        this.getRoles();
      },
      (error) => {
        alert("burda da bişiler yanış gitti");
      }
    );
  }

  deleteRole(roleForm: NgForm) {
    this.roleService.deleteRole(roleForm.value).subscribe(
      (data) => {
        this.getRoles();
      },
      (error) => {
        alert("burda da bişiler yanış gitti");
      }
    );
  }
}
