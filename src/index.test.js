const { createTestClient } = require("apollo-server-testing");

describe("index test", () => {
  test("it works", () => {
    const { query, mutate } = createTestClient(server);

    const x = query({
      query: GET_USER,
      variables: { id: 1 }
    });

    console.log(x);
  });
});
