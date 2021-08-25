import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.scss"],
})
export class PipesComponent implements OnInit {
  title = "FaRKLı OLMa ÇaBaSı İçİNDe OLMaDıĞıMDaN ÖtüRü FaRKLıYıM";
  today;
  cashVal = 1568.285;
  object: Object = {
    foo: "baz",
    baz: "qux",
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  percentVal = 43646.547;
  cityName = "Silemani";
  cash = 1500;
  cities = [
    "Amed",
    "Sêrt",
    "Xarpêt",
    "Wan",
    "Riha",
    "Mêrdîn",
    "Colemêrg",
    "Bidlîs",
  ];

  constructor() {}

  ngOnInit(): void {
    this.today = new Date().toDateString();
  }
}
