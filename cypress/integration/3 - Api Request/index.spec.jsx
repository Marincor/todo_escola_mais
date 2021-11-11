// Get - userList //
function requestApiUser() {
  return cy.request("GET", "https://jsonplaceholder.typicode.com/todos");
}

describe("Get User List", () => {
  it("Successfully", () => {
    requestApiUser().then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});

// Get - taskList //

function requestApiTask() {
  return cy.request(
    "GET",
    "`https://jsonplaceholder.typicode.com/posts?userId=1"
  );
}

describe("Get Task List", () => {
  it("Successfully", () => {
    requestApiTask().then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});

// Post - NewTask //

function requestNewTask() {
  return cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "Cypress - test",
    body: "Library test",
    userId: 1,
  });
}

describe("Create a new task", () => {
  it("Successfully", () => {
    requestApiTask().then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
