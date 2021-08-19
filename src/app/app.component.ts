import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "ikinci-kurs";
  translateService: any;

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang("en");
    this.translate.use("en");
  }
  ngOnInit(): void {
    this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    this.translateService.onLangChange.subscribe((resp) => {
      const title = this.translateService.instant("toastr.title");
      const message = this.translateService.instant("toastr.message");
      this.toastr.success(title, message);
    });
  }

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
