//1. Authenticate -> Create Employee -> Display Employee  -> Delete Employee

const { test, expect } = require('@playwright/test')
const { request } = require('node:http')
let tokenData = ""
let empId = 0
test("Authneticate User", async ({ request }) => {
    const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate", {
        data: {
            "username": "sabrin",
            "password": "sabrin"
        },
        headers: {
            "Content-Type": "application/json"
        }
    })

    tokenData = await response.text()
    console.log("Token Data :" + tokenData);
})

test("Create Customer Request", async ({ request }) => {
    console.log("This Testcase create Employee using POST HTTP Method");

    const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/employees", {
        data: {

            "firstName": "sabrin",
            "lastName": "Bhavikatti",
            "jobName": "Tester",
            "emailId": "sabz@gmail.com",
            "age": 30,
            "contactNumber": 9087654321,
            "salary": 50000,
            "departmentName": "IT",
            "cityName": "Banglore",
            "address": "kormangala"

        },
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenData

        }
    })
    const jsondata = await response.json()
    empId = jsondata.id
    console.log("Employee Id :" + empId);

    //Print Customer Resposne
    const employeeContent = (await response.text()).toString()
    console.log("Customer Content :" + employeeContent);
    //Validation
    await expect(response.status()).toBe(201)

})

test("Display Newly Created Employee", async ({ request }) => {
    console.log("This Testcase display existing Employee using GET HTTP Method");
    const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/employees/" + empId, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenData

        }
    })
    //Print Customer Resposne from GET Method
    const employeeContent = (await response.text()).toString()
    console.log("Customer Content :" + employeeContent);
    //Validation
    await expect(response.status()).toBe(200)
})

test("Delete Newly Created Employee", async ({ request }) => {
    console.log("This Testcase Deletes existing Customer using DELETE HTTP Method");
    const response = await request.delete("https://sgtestinginstitute.onrender.com/api/v1/employees/" + empId, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenData

        }
    })
    //Print Delete Employee Resposne from DELETE Method
    const employeeContent = (await response.text()).toString()
    console.log("Customer Content :" + employeeContent);
    //Validation
    await expect(response.status()).toBe(200)
})