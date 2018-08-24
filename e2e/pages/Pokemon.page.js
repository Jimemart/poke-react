import { Selector } from 'testcafe'

export default class Page {
  constructor() {
    this.images = Selector('img')
    this.firstTitle = Selector('h1').withText('BULBASAUR')
    this.bulbasaurHeight = Selector('h3').withText('Height:7')
    this.bulbasaurWeight = Selector('h3').withText('Weight:69')
    this.natures = Selector('[data-hook="nature"]')
    this.input = Selector('input')
    this.newPokemonId = '4'
    this.secondTitle = Selector('h1').withText('CHARMANDER')
    this.charmanderHeight = Selector('h3').withText('Height:6')
    this.charmanderWeight = Selector('h3').withText('Weight:85')
  }
}
