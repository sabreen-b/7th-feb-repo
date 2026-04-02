//6. Navigate URL -> Login -> CreateCustomer -> CreateProject -> ModifyProject > DeleteProject -> DeleteCustomer  -> Logout  //5. Navigate URL -> Login -> CreateCustomer -> CreateProject ->  DeleteProject -> DeleteCustomer -> Logout
const { test, expect } = require('@playwright/test')

test("scenario 6", async ({ page }) => {

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
    await page.selectOption("//select[@class='form-select']", "digit")
    await page.locator("//button[@type='submit']").click()

    const projectName = await page.locator("//td[contains(text(),'Digit')]").textContent()
    await expect(projectName).toContain("Digit Icon")
    console.log(projectName)

    // Modify project
    await page.locator("//tbody/tr[3]/td[7]/button[1]").click()
   

    await page.locator("//input[@placeholder='Enter Project Title']").fill("Digit Icon")
    await page.locator("//input[@placeholder='Enter Project Domain']").fill("Insurance")
    await page.locator("//input[@placeholder='Enter Project Description']").fill("Term plan")
    //dropdown
    await page.selectOption("//select[@class='form-select']", "digit")
    await page.locator("//button[@type='submit']").click()

    const projectDescriptionchanged = await page.locator("//td[normalize-space()='Term plan']").textContent()
    await expect(projectDescriptionchanged).toContain("Term plan")
    console.log(projectDescriptionchanged);

    //Delete project
    await page.once("dialog", async (dialog) => {
            const message = await dialog.message()
            console.log("Alert Message :" + message);
            await dialog.accept()
    })
    await page.locator("//tbody/tr[3]/td[7]/button[2]").click()
        await page.waitForTimeout(2000)


    // Delecte cx 
    await page.locator("//a[normalize-space()='Customers']").click()
    await page.once("dialog", async (dialog) => {
            const message = await dialog.message()
            console.log("Alert Message :" + message);
            await dialog.accept()

    })

        await page.locator("//tbody/tr[1]/td[6]/button[2]").click()
        await page.waitForTimeout(2000)

})