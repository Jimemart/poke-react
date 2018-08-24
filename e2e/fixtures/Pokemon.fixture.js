import Page from "../pages/Pokemon.page"

const page = new Page()

fixture(`Pokemon`).page(`http://127.0.0.1:3000`)

test("it should fetch a new pokemon on input", async t => {
  await t.expect(page.firstTitle.exists).ok({ timeout: 5000 })
  await t.expect(page.images.count).eql(4)
  await t.expect(page.bulbasaurHeight.exists).ok()
  await t.expect(page.bulbasaurWeight.exists).ok()
  await t.expect(page.natures.count).eql(2)
  await t.typeText(page.input, page.newPokemonId)
  await t.expect(page.secondTitle.exists).ok({ timeout: 5000 })
  await t.expect(page.charmanderHeight.exists).ok()
  await t.expect(page.charmanderWeight.exists).ok()
  await t.expect(page.natures.count).eql(1)
})
