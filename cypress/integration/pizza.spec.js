//Pizza form Tests here
describe("Pizza Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  //sanity tests
  it("sanity checks", () => {
    expect(5).to.equal(5);
    expect(1 + 2).to.equal(3);
    expect({}).to.eql({});
    expect({}).to.not.equal({});
  });

  //text input tests
  const nameInput = () => cy.get("[data-cy=nameInput]");
  const specialInput = () => cy.get("[data-cy=specialInput]");

  describe("Filling out inputs", () => {
    it("Can type in nameInput with values matching what is typed", () => {
      nameInput()
        .should("exist")
        .should("have.value", "")
        .type("Customer Name")
        .should("have.value", "Customer Name")
        .clear()
        .should("have.value", "");
    });
    it("Can type in specialInput with values matching what is typed", () => {
      specialInput()
        .should("exist")
        .should("have.value", "")
        .type("Please make me an extra special pizza")
        .should("have.value", "Please make me an extra special pizza")
        .clear()
        .should("have.value", "");
    });
  });

  //Checkbox test
  const pepperoniCheckbox = () => cy.get("[data-cy=pepperoniCheckbox]");
  const sausageCheckbox = () => cy.get("[data-cy=sausageCheckbox]");
  const onionsCheckbox = () => cy.get("[data-cy=onionsCheckbox]");
  const greenpeppersCheckbox = () => cy.get("[data-cy=greenpeppersCheckbox]");

  describe("check toppings checkboxes", () => {
    it("checks pepperoni", () => {
      pepperoniCheckbox()
        .should("exist")
        .should("have.value", "false")
        .check()
        .should("have.checked", "checked");
    });

    it("checks sausage", () => {
      sausageCheckbox()
        .should("exist")
        .should("have.value", "false")
        .check()
        .should("have.checked", "checked");
    });

    it("checks onions", () => {
      onionsCheckbox()
        .should("exist")
        .should("have.value", "false")
        .check()
        .should("have.checked", "checked");
    });

    it("checks greenpeppers", () => {
      greenpeppersCheckbox()
        .should("exist")
        .should("have.value", "false")
        .check()
        .should("have.checked", "checked");
    });
  });

  //submit form test
  const sizeSelect = () => cy.get("[data-cy=sizeSelect]");
  const form = () => cy.get("[data-cy=form]");

  describe("fill out form and submit", () => {
    it("Can fill out the form and submit", () => {
      nameInput().type("Test Customer");
      sizeSelect().select("small");
      sizeSelect().select("medium");
      sizeSelect().select("large");
      pepperoniCheckbox().check();
      greenpeppersCheckbox().check();
      specialInput().type("Well done plz :)");
      form().submit();
    });
  });

  //PARENT DESCRIBE ENDS
});
