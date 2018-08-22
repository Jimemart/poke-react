import Page from "../pages/App.page"
// RUN TEST: yarn testcafe chrome e2e -f App
// RUN TEST WITH DEBUGGER: yarn testcafe --inspect --debug-brk chrome e2e -f App

const page = new Page()

fixture("App").page(`http://localhost:3000`)

test("Navigate to modify address page", async t => {
  await t.expect(page.title.exists).ok()
})
