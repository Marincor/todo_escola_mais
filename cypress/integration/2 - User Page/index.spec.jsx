describe("At the user page, shows:", () => {
  it("The school logo", () => {
    cy.visit("/user/1");

    cy.get("[data-cy=logo]").should("to.have.length", 1);
  });
  it("The legend form", () => {
    cy.get("[data-cy=legendForm").should("to.have.length", 1);
  });
  it("The inputs", () => {
    cy.get("[ data-cy=title]").should("to.have.length", 1);
    cy.get("[ data-cy=body]").should("to.have.length", 1);
  });
  it("The new task button", () => {
    cy.get("[ data-cy=buttonNewTask]").should("to.have.length", 1);
  });
  it("The task title", () => {
    cy.get("[data-cy=taskList]").should("to.have.length", 10);
  });

  it("The button to complete", () => {
    cy.get("[data-cy=done]").should("to.have.length", 10);
  });
  it("The button to show the task description", () => {
    cy.get("[data-cy=buttonTask]").should("to.have.length", 10);
  });
});

describe("Clicking at complete button, shows", () => {
  it("The pending button", () => {
    cy.get("[data-cy=done]").eq(0).click();

    cy.get("[data-cy=done]").eq(0).should("have.class", "undoneButton");
    cy.contains("pendenciar !").should("to.have.length", 1);
  });
});

describe("Clicking at the show description button, shows", () => {
  it("The task description", () => {
    cy.get("[data-cy=buttonTask]").eq(0).click();
    cy.get("[data-cy=taskBody]").eq(0).should("have.class", "showTask");
  });
});

describe("At write new task and clicking on new task button:", () => {
  it("Create a new task", () => {
    cy.get("[data-cy=title]").type("Write a new test");
    cy.get("[data-cy=body]").type("Using cypress, the best library to test!");
    cy.get("[ data-cy=buttonNewTask]").click();
  });
});
