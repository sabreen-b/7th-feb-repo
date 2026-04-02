const { test, expect } = require("@playwright/test");

const { UtilityClass } = require("../../utils/scenario2.js");
const { request } = require("node:http");

let Token = "";
let empId = "";
let o=new UtilityClass();
let firstName = o.generateAlphaNumeric();
let emailId= o.generateAlphaNumeric()+"@gmail.com";
let phone= o.generatePhoneNumber();

test.describe.serial("Employee API Flow", () => {

test.beforeAll(async ({ request }) => {
  let response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate", {
    data: {
      username: "sabrin",
      password: "sabrin"
    },
    headers: {
      "Content-Type": "application/json"
    }
  });

  Token = await response.text();
  console.log("Token =", Token);
});

test("Create employee", async ({ request }) => {
  let response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/employees", {
    data: {
      firstName: firstName,
      lastName: "Bhavikatti",
      jobName: "Tester",
      emailId: emailId,
      age: 30,
      contactNumber: phone,
      salary: 50000,
      departmentName: "IT",
      cityName: "Banglore",
      address: "kormangala"
    },
    headers: {
      "Authorization": "Bearer " + Token,
      "Content-Type": "application/json"
    }
  });

  console.log("Status:", response.status());

  const jsondata = await response.json()
  console.log("Employee Content:", jsondata);


  empId = jsondata.id;
  console.log("Employee Id:", empId);

  await expect(response.status()).toBe(201);
});

test("Get Employee Details", async ({ request }) => {
  const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/employees/" + empId, {

    headers: {
      "Authorization": "Bearer " + Token
    }
  })
  let jsondata = await response.json()
  await expect(response.status()).toBe(200)

})

test("Modify employee", async ({ request }) => {
  const response = await request.put("https://sgtestinginstitute.onrender.com/api/v1/employees/" + empId, {
    data: {
      firstName: firstName,
      lastName: "Bhavikatti",
      jobName: "Tester",
      emailId: emailId,
      age: 30,
      contactNumber: phone,
      salary: 70000,
      departmentName: "IT",
      cityName: "Banglore",
      address: "kormangala"
    },
    headers: {
      "Authorization": "Bearer "+Token

    }
  })
  let jsondata=await response.json()
  await expect(jsondata.salary).toBe(70000)
  await expect(response.status()).toBe(200)
})



test("Delete Created Employee", async({request})=>{
  const response=await request.delete("https://sgtestinginstitute.onrender.com/api/v1/employees/" + empId,{
    headers:{
      "Authorization": "Bearer "+Token
    }
  })
  await expect(response.status()).toBe(200)
})
});