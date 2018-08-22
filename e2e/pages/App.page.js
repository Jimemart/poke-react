import { Selector } from "testcafe"

export default class Page {
  constructor() {
    this.title = Selector("#h1")
  }
}
