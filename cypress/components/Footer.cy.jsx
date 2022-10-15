import Footer from "../../src/components/Footer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "../../src/app/store";

describe("Footer Test", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  });
  it("Footer Test", () => {
    cy.get("footer").children();
  });
  it("Sibling Test", () => {
    cy.get("div").siblings("#user-github")
  });
});
