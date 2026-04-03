class AuthHelper {
  static async login(page, username, password) {
    await page.goto("https://sgtestinginstituteapp.onrender.com/");
    
    await page.locator('input[name="username"]').fill(username);
    await page.locator('input[name="password"]').fill(password);
    await page.locator("//button[normalize-space()='Sign In']").click();
  }
}

module.exports = { AuthHelper };