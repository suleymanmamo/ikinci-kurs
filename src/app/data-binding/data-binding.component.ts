import { Component, OnInit } from "@angular/core";

@Component({
  selector: "data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"],
})
export class DataBindingComponent implements OnInit {
  user = {
    name: "Sileman",
    surname: "Mamo",
    job: "jobless",
    favorite_place: "amed",
    favorite_place_image: "https://pbs.twimg.com/media/Ce8LNSkWwAA1qOy.jpg",
    isEditable: true,
  };

  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    alert("clicked");
  }

  inputSubmit(value: any) {
    alert(value.target.value + " geldi..");
  }
}
