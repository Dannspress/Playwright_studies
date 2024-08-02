import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./login");
});

test.describe("Login", () => {
  test("Exemplo clássico", async ({ page }) => {
    //await page.locator("#email").fill("teste@teste.com.br"); //tag, ID, class, attribute, xpath**
    await page
      .locator("input[placeholder='E-mail']")
      .fill("teste@teste.com.br"); //combination
    await page.locator("#password").fill("123456"); //cy.get()
    await page.getByText("Entrar").click();
  });

  test("Exemplo alternativo", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "E-mail" })
      .fill("teste@teste.com.br");
    await page.getByLabel("Senha").fill("123456"); 
    await page.getByRole("button", { name: "Entrar" }).click();

    //await page.getByPlaceholder, Text, Title, TestId, entre outros...
  });

  test("Outro exemplo alternativo", async ({ page }) => {
    const emailField = page.getByRole("textbox", { name: "E-mail" }); //util para repetições de filtro
    await emailField.fill("teste@teste.com.br");
    await expect(emailField).toHaveValue("teste@teste.com.br");

    await page.getByLabel("Senha").fill("123456");
    await page.getByRole("button", { name: "Entrar" }).click();
  });

  test("Assertions", async ({ page }) => {
    const formInput = page.locator("#password");

    //Gerais
    const value = 5;
    expect(value).toBe(5);

    //Locator assertion
    await expect(formInput).toHaveText("");

    //Soft assertion
    //await expect.soft(formInput).toHaveText("Texto");
    //await formInput.fill("123456");
  });
});
