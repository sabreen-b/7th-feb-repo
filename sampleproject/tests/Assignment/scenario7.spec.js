
//6. Navigate URL -> Login -> CreateCustomer -> CreateProject -> ModifyProject > DeleteProject -> DeleteCustomer  -> Logout  //5. Navigate URL -> Login -> CreateCustomer -> CreateProject ->  DeleteProject -> DeleteCustomer -> Logout
const { test, expect } = require('@playwright/test')

test("scenario 7", async ({ page }) => {

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

    //Create Task
    await page.locator("//a[normalize-space()='Tasks']").click()
    await page.locator("//a[@class='btn btn-primary']").click()
    await page.getByPlaceholder("Enter Task Title").fill("Create Policy")
    await page.getByPlaceholder("Enter Task Description").fill("I am the PH and my daughter is LA")
         // Cx name dropdown
    await page.selectOption("//select[@class='form-select']", "digit")
    await page.selectOption("(//select[@class='form-select'])[2]", "Digit Icon")
    await page.locator("//button[@type='submit']").click()
        //Veriy task creation
    const TaskName=await page.locator("//td[normalize-space()='Create Policy']").textContent()
    await expect(TaskName).toContain("Create Policy")
    console.log(TaskName);

    //Delete Task
    await page.once("dialog",async(dialog)=>{
        const message = await dialog.message()
           console.log("Alert Message :" + message);
           await dialog.accept()
    })
    await page.locator("//tbody/tr[3]/td[8]/button[2]").click()

 

    

    //Delete project
    await page.locator("//a[normalize-space()='Projects']").click()
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