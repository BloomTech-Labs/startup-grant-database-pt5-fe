// this file tests the landing page for the development ready env

describe("'Welcome' Link", function() {
  it("should redirect to '/welcome'", function() {
    // cy.visit() tells cypress to visit the website to run the test
    cy.visit("https://www.grantlify.com/");
    // cy.contains makes sure the above url has the text inside of the invocation somewhere on the url
    cy.contains("Welcome").click();
    cy.url().should("include", "/welcome");
  });
});
