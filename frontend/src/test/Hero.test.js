import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";   //since this is depreciated 
import '@testing-library/jest-dom'; // we will use this 

import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    //test description
    render(<Hero />); //it will not visible at UI , it will happen in backend, results will be shown in terminal
    const heroImage = screen.getByAltText("Hero Image");  //checking attribute
    expect(heroImage).toBeInTheDocument();  //checking presence in the document
    expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png') 
  });

//   we can write multiple test cases for multiple element
// for signup
test("renders signup button", () => {
    //test description
    render(<Hero />); //it will not visible at UI , it will happen in backend, results will be shown in terminal
    const signupButton = screen.getByRole("button", {name: '/signup now'});  //checking attribute
    expect(signupButton).toBeInTheDocument();  //checking presence in the document
    expect(signupButton).toHaveClass("btn-primary"); 
  });
});
