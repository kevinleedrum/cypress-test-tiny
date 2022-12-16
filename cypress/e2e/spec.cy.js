/// <reference types="cypress" />
describe("page", () => {
  it("has a visible section", () => {
    cy.visit("http://localhost:8888");
    cy.get("section").should("be.visible");
  });
});
