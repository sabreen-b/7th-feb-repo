//5. Navigate URL -> Login -> CreateCustomer -> CreateProject ->  DeleteProject -> DeleteCustomer -> Logout
const { test, expect } = require('@playwright/test')

test("Handling keyboard operation", async ({ page }) => {

    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(2000)
    //Login Action
    await page.locator('input[name="username"]').fill("pgudi")
    await page.locator('input[name="password"]').fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(2000)
    //Create customer
    await page.locator("//a[normalize-space()='Customers']").click()
    await page.locator("//a[@class='btn btn-primary']").click()
    await page.locator("//input[@placeholder='Enter Customer Name']").fill("digit")
    await page.locator("//input[@placeholder='Enter EmailId']").fill("digit@gmail.com")
    await page.locator("//input[@placeholder='Enter Location']").fill("bangalore")
    await page.locator("//input[@placeholder='Enter Description']").fill("insurance")
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(2000)

    //Create project
    await page.locator("//a[normalize-space()='Projects']").click()
    await page.locator("//a[@class='btn btn-primary']").click()
    await page.locator("//input[@placeholder='Enter Project Title']").fill("Digit Icon")
        await page.locator("//input[@placeholder='Enter Project Domain']").fill("Insurance")
    await page.locator("//input[@placeholder='Enter Project Description']").fill("Endowment plan")
//dropdown
    await page.selectOption("//select[@class='form-select']","digit")
await page.locator("//button[@type='submit']").click()

const projectName=await page.locator("//td[contains(text(),'Digit')]").textContent()
await expect(projectName).toContain("Digit Icon")
console.log(projectName)

  
await page.on("dialog", async (dialog) => {
        const message = await dialog.message()
        console.log("Alert Message :" + message);
        await dialog.accept()
})
await page.locator("//button[@class='btn btn-danger']").click()

//Delecte cx 
await page.locator("//a[normalize-space()='Customers']").click()
await page.on("dialog", async (dialog) => {
        const message = await dialog.message()
        console.log("Alert Message :" + message);
        await dialog.accept()
 
})
 
    await page.locator("//tbody/tr[4]/td[6]/button[2]").click()
    await page.waitForTimeout(2000)

})