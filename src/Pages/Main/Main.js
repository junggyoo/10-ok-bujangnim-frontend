import React from "react";
import CitrusFeed from "./Components/CitrusFeed/CitrusFeed";
import Carousel from "./Components/Carousel/Carousel";
import Appointment from "./Components/Appointment/Appointment";
import Store from "./Components/Store/Store";
import Quote from "./Components/Quote/Quote";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      firstFeed: false,
      secondFeed: false,
      thirdFeed: false,
      fourthFeed: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.listenScrollEvent);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.listenScrollEvent);
  };

  listenScrollEvent = () => {
    if (window.scrollY > 220) {
      this.setState({ firstFeed: true });
    }

    if (window.scrollY > 1000) {
      this.setState({ secondFeed: true });
    }

    if (window.scrollY > 1750) {
      this.setState({ thirdFeed: true });
    }

    if (window.scrollY > 2300) {
      this.setState({ fourthFeed: true });
    }
  };

  render() {
    const { firstFeed, secondFeed, thirdFeed, fourthFeed } = this.state;
    return (
      <div className="Main">
        <CitrusFeed />
        <Carousel firstFeed={firstFeed} />
        <Appointment secondFeed={secondFeed} />
        <Store thirdFeed={thirdFeed} />
        <Quote fourthFeed={fourthFeed} />
        <Footer />
      </div>
    );
  }
}

export default Main;
