//1. Navigate URL -> Login -> CreateEmployee -> DeleteEmployee -> Logout 
const { test, expect } = require('@playwright/test');
const { AuthHelper } = require('../../utils/authHelper');
const { EmployeeHelper } = require('../../utils/employeeHelper');
const { DataUtil } = require('../../utils/dataUtil');

test("Create and Delete Employee", async ({ page }) => {

  // Generate dynamic data
  const name = DataUtil.generateName();

  const employee = {
    firstName: name,
    lastName: "test",
    job: "QA",
    email: DataUtil.generateEmail(name),
    age: "29",
    phone: DataUtil.generatePhone(),
    salary: "20000",
    department: "IT",
    city: "Bangalore",
    address: "BTM"
  };

  // Login
  await AuthHelper.login(page, "sabrin", "sabrin");

  // Create Employee
  await EmployeeHelper.createEmployee(page, employee);

  // Validate
  await expect(page.locator(`//td[normalize-space()='${name}']`)).toBeVisible();

  // Delete Employee
  await EmployeeHelper.deleteEmployee(page, name);
});