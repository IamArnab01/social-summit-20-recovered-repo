import React, { Component } from "react";
import CABackground from "./CABackground";
import WhyCA from "./WhyCA";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
export class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <CABackground></CABackground>
          <WhyCA> </WhyCA>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
