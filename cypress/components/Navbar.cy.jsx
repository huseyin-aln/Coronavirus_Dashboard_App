// import cy from "cypress";
import Navbar from "../../src/components/Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "../../src/app/store";

describe("Navbar Test", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
  });
  it("Navbar Test", () => {
    cy.get(".navbarContainer").children();
  });
  it("Home Link Test", () => {
    cy.get(".home" ).contains("Home");
  });
  it("Detail Link Test", () => {
    cy.get(".detail" ).contains("Detail");
  });
  it("Button Test", () => {
    cy.get("button").should("have.text", "Search")
  });
  it("Toggle Test", () => {
    cy.get(".toggle").trigger("click")
    cy.get(".menu").should("be.visible")
  });
});

