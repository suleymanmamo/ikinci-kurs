import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CookieService } from "ngx-cookie-service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import {
  IgxNavbarModule,
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxInputGroupModule,
  IgxSelectModule,
} from "igniteui-angular";
import { AuthInterceptor, UserService } from "src/libs";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    IgxNavbarModule,
    IgxIconModule,
    CommonModule,
    IgxButtonModule,
    HttpClientModule,
    IgxLayoutModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      easing: "ease-in",
      closeButton: false,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-right",
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CookieService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    "./assets/i18n/",
    ".json?cb=" + new Date().getTime()
  );
}
