class EmployeeHelper {

  static async createEmployee(page, employee) {
    await page.locator("//a[normalize-space()='Employees']").click();
    await page.locator("//a[normalize-space()='Add Employee']").click();

    await page.locator("//input[@placeholder='Enter First Name']").fill(employee.firstName);
    await page.locator("//input[@placeholder='Enter Last Name']").fill(employee.lastName);
    await page.locator("//input[@placeholder='Enter Job Name']").fill(employee.job);
    await page.locator("//input[@placeholder='Enter Email Id']").fill(employee.email);
    await page.locator("//input[@placeholder='Enter Age']").fill(employee.age);
    await page.locator("//input[@placeholder='Enter Contact Number']").fill(employee.phone);
    await page.locator("//input[@placeholder='Enter Salary']").fill(employee.salary);
    await page.locator("//input[@placeholder='Enter Department Name']").fill(employee.department);
    await page.locator("//input[@placeholder='Enter City Name']").fill(employee.city);
    await page.locator("//input[@placeholder='Enter Address']").fill(employee.address);

    await page.locator("//button[normalize-space()='Save']").click();

    // wait for employee to appear
    await page.locator(`//td[normalize-space()='${employee.firstName}']`).waitFor();
  }

  static async deleteEmployee(page, name) {

    const row = page.locator(`//td[normalize-space()='${name}']/ancestor::tr`);

    await row.waitFor();

    page.on("dialog", async dialog => {
      console.log("Alert:", dialog.message());
      await dialog.accept();
    });

    await row.locator("button:nth-child(2)").click();
  }
}

module.exports = { EmployeeHelper };