import React, { Component } from "react";
import Navbar from "../Layout/Navbar/Navbar";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import Map from "./Map";
import Footer from "../Layout/Footer/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GetInTouch />
        <Map />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}
