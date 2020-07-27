import React from "react";
import { aesopLogoPath } from "../../../../config";
import "./Carousel.scss";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItemIdx: 0,
      shownItems: [],
      shownPrev: false,
      shownNext: true,
    };
  }

  componentDidMount() {
    this.handleInitData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentItemIdx } = this.state;

    if (prevState.currentItemIdx !== currentItemIdx) {
      if (currentItemIdx === 0) this.setState({ shownPrev: false });
      else if (currentItemIdx === 4) this.setState({ shownNext: false });
      else this.setState({ shownPrev: true, shownNext: true });
    }
  }

  handleInitData = () => {
    fetch("http://localhost:3000/data/maindata.json")
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "SUCCESS") {
          this.setState({ items: res.data });
        }
      });
  };

  prevSlide = () => {
    const { items, currentItemIdx } = this.state;
    const resetToVeryBack = currentItemIdx === 0;
    const index = resetToVeryBack ? items.length - 1 : currentItemIdx - 1;
    this.setState({ currentItemIdx: index });
  };

  nextSlide = () => {
    const { items, currentItemIdx } = this.state;
    const resetIndex = currentItemIdx === items.length - 1;
    const index2 = resetIndex ? 0 : currentItemIdx + 1;
    this.setState({ currentItemIdx: index2 });
  };

  itemsToDisplay = () => {
    const { items, currentItemIdx } = this.state;
    const createSources = items.slice(currentItemIdx, currentItemIdx + 3);
    return createSources;
  };

  cursorInArrows = () => {
    const { currentItemIdx } = this.state;
    if (currentItemIdx === 0) {
      this.setState({
        shownPrev: false,
        shownNext: true,
      });
    } else if (currentItemIdx === 4) {
      this.setState({
        shownPrev: true,
        shownNext: false,
      });
    } else {
      this.setState({ shownPrev: true, shownNext: true });
    }
  };

  cursorOutArrows = () => {
    this.setState({
      shownPrev: false,
      shownNext: false,
    });
  };

  render() {
    const itemList = this.itemsToDisplay();

    return (
      <>
        <div className={this.props.firstFeed ? "Carousel" : "HiddenCarousel"}>
          <div
            className="itemCarousel"
            onMouseEnter={this.cursorInArrows}
            onMouseLeave={this.cursorOutArrows}
          >
            <div className="btnWrapper">
              <button
                className={
                  this.state.shownPrev ? "prevBtn " : "prevBtnIsHidden"
                }
                onClick={this.prevSlide}
                disabled={this.state.shownPrev ? "" : "disabled"}
              >
                <svg role="img" viewBox="0 0 50 50">
                  <g>
                    <polygon points={aesopLogoPath.slideArrow}></polygon>
                  </g>
                </svg>
              </button>
            </div>
            <div className="listedItem">
              {/* 2,6은 내가 추가한 것 */}
              {itemList.map((el) => (
                <div className="eachItem">
                  <img alt="" src={el.image_url} />
                  <p>{el.product__name}</p>
                  <p className="briefDesc">{el.product__description}</p>
                </div>
              ))}
            </div>
            <div className="btnWrapper">
              <button
                className={
                  this.state.shownNext ? "nextBtn " : "nextBtnIsHidden"
                }
                onClick={this.nextSlide}
                disabled={this.state.shownNext ? "" : "disabled"}
              >
                <svg role="img" viewBox="0 0 50 50">
                  <g>
                    <polygon points={aesopLogoPath.slideArrow}></polygon>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Carousel;
