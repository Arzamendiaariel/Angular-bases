import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;
  get getcapitalizedName(): string {
    return this.name.toUpperCase();
  }
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  public changeName(): void {
    this.name = "wolverine";
  }
  public changeAge(): void {
    this.age = 34;
  }
  public resetForm(): void {
    this.name = "ironman";
    this.age = 45;
  }
}
