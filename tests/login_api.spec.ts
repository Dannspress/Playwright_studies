import { test, expect, request } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

test("Exemplo clássico", async ({ page, request }) => {
  const response = await request.get("add-your-api-endpoint-here", {
    data: {
      email: "teste@teste.com.br",
      password: "123456",
    },
  });

  //const responseBody = await response.json();
  //console.log(responseBody);
});
