context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a header message", () => {
    cy.get("h1").contains("HELLO WORLD");
  });
});

export {};
