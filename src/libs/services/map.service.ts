import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

interface city {
  id: number;
  name: string;
  plaka: number;
  region: string;
}
@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor() {}
  cities = [
    {
      id: 1,
      name: "Amed",
      region: "Kuzey",
      plaka: 21,
    },
    {
      id: 2,
      name: "Riha",
      region: "Kuzey",
      plaka: 12,
    },
    {
      id: 3,
      name: "Hewler",
      region: "Güney",
      plaka: 34,
    },
    {
      id: 4,
      name: "Kamışlo",
      region: "Batı",
      plaka: 24,
    },
    {
      id: 5,
      name: "Mahabad",
      region: "Güney",
      plaka: 5,
    },
    {
      id: 6,
      name: "Merdin",
      region: "Kuzey",
      plaka: 7,
    },
  ];

  public cityNameSubject = new Subject<any>();
  public cityPlakaSubject = new Subject<any>();
  public cityRegionSubject = new Subject<any>();

  getCityNames() {
    const data = this.cities.map((elem) => ({
      id: elem.id,
      name: elem.name,
    }));
    this.cityNameSubject.next(data);
  }
  getCityPlakas() {
    const data = this.cities.map((elem) => ({
      id: elem.id,
      name: elem.name,
      plaka: elem.plaka,
    }));
    this.cityPlakaSubject.next(data);
  }
  getCityRegions() {
    const data = this.cities.map((elem) => ({
      id: elem.id,
      name: elem.name,
      region: elem.region,
    }));
    this.cityRegionSubject.next(data);
  }
  save(value: city) {
    const index = this.cities.findIndex((el) => el.id === value.id);
    if (index > -1) {
      this.cities[index] = value;
    } else {
      this.cities.push(value);
    }
    this.getCityNames();
    this.getCityPlakas();
    this.getCityRegions();
  }
}
