import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "drt-view",
  templateUrl: "./drt-view.component.html",
})
export class DrtViewComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() {}

  ngOnInit(): void {}
}
