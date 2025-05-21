export class Recipe {
  constructor(title) {
    this.title = title;
  }

  show() {
    console.log(`Recipe: ${this.title}`);
  }
}
