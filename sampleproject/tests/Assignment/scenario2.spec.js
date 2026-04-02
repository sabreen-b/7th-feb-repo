//2. Navigate URL -> Login -> CreateEmployee -> ModifyEmployee -> DeleteEmployee -> Logout 

const{test,expect}=require('@playwright/test')

test("Handling keyboard operation",async({page})=>{

 await page.goto("https://sgtestinginstituteapp.onrender.com/")
 await page.waitForTimeout(2000)
    //Login Action
    await page.locator('input[name="username"]').fill("pgudi")
    await page.locator('input[name="password"]').fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(2000)
    //Create employee
    await page.locator("//a[normalize-space()='Employees']").click()
    await page.locator("//a[normalize-space()='Add Employee']").click()
    await page.locator("//input[@placeholder='Enter First Name']").fill("sabreen")
    await page.locator("//input[@placeholder='Enter Last Name']").fill("bhavikatti")
    await page.locator("//input[@placeholder='Enter Job Name']").fill("software tester")
    await page.locator("//input[@placeholder='Enter Email Id']").fill("sabz@gmail.com")
    await page.locator("//input[@placeholder='Enter Age']").fill("29")
    await page.locator("//input[@placeholder='Enter Contact Number']").fill("8431690386")
    await page.locator("//input[@placeholder='Enter Salary']").fill("18000")
    await page.locator("//input[@placeholder='Enter Department Name']").fill("IT")
    await page.locator("//input[@placeholder='Enter City Name']").fill("banglore")
    await page.locator("//input[@placeholder='Enter Address']").fill("kormangala")
    await page.locator("//button[normalize-space()='Save']").click()
        await page.waitForTimeout(2000)

//modify employee
await page.locator("//tbody/tr[3]/td[12]/button[1]").click()


//Delete employee
// const employeeName=await page.locator("//td[normalize-space()='sabreen']").textContent()
//     await expect(employeeName).toContain("sabreen")
//     await page.waitForTimeout(2000)
// await page.on("dialog", async (dialog) => {
//         const message = await dialog.message()
//         console.log("Alert Message :" + message);
//         await dialog.accept()
 
//     })
 
//     await page.locator("//body[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[3]/td[12]/button[2]").click()
//     await page.waitForTimeout(2000)
  

})