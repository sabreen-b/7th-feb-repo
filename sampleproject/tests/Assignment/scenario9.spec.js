//9. Navigate URL -> Login -> ImportEmployee ->DeleteEmploye -> Logout
import {test,expect} from'@playwright/test';
test("scenario 8", async ({ page }) => {

    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(2000)
    //Login Action
    await page.locator('input[name="username"]').fill("pgudi")
    await page.locator('input[name="password"]').fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(2000)

   //import employee
   await page.locator("//a[normalize-space()='Import Employee']").click()
   await page.setInputFiles("//input[@type='file']","C:/Users/Dell/Downloads/employees.csv")
   await page.locator("//button[@type='submit']").click()

   //verify employee import
const empname=await page.locator("//td[normalize-space()='sabreen']").textContent()
await expect(empname).toContain("sabreen")
console.log(empname);

// Delete employee
await page.once("dialog",async(dialog)=>{
    const msg=await dialog.message()
    console.log(msg);
    await dialog.accept()
    })
await page.locator("//tbody/tr[4]/td[12]/button[2]").click()
})