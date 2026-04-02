//3. Navigate URL -> Login -> CreateCustomer -> DeleteCustomer -> Logout
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

    //update cx details 
    const cxName=await page.locator("//td[normalize-space()='digit']").textContent()
    await expect(cxName).toContain("digit")
    await page.waitForTimeout(2000)
await page.locator("//tbody/tr[4]/td[6]/button[1]").click()
await page.waitForTimeout(2000)
await page.locator("//input[@placeholder='Enter Location']").fill("dwd")
await page.locator("//button[@type='submit']").click()

    //Delete cx
    
await page.on("dialog", async (dialog) => {
        const message = await dialog.message()
        console.log("Alert Message :" + message);
        await dialog.accept()
 
    })
 
    await page.locator("//tbody/tr[4]/td[6]/button[2]").click()
    await page.waitForTimeout(2000)
}) 