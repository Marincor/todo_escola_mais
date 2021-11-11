describe("At the Home Page - User List Page, shows:", () => {
  it("The school logo", () => {
    cy.visit("/");

    cy.get("[data-cy=logo]").should("to.have.length", 1);
  });
  it("The user list title", () => {
    cy.get("[data-cy=titleList]").should("to.have.length", 1);
  });
  it("The user name", () => {
    cy.get("[data-cy=username]").should("to.have.length", 10);
  });
  it("The link button to tasks", () => {
    cy.get("[data-cy=linkButton]").should("to.have.length", 10);
  });
});

describe("At Clicking on user task button:", () => {
  it("Redirect to the user page", () => {
    cy.get("[data-cy=linkButton]").eq(0).click();

    cy.url().should("eq", "http://localhost:3000/user/1");
  });
});
