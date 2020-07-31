import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import Product from "./Product";
import Sliderintro from "./Sliderintro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productslider.scss";

class Productslider extends React.Component {
  clickHandler = (id) => {
    this.props.history.push(`/skin/${id}`);
  };
  render() {
    const { products } = this.props;
    const settings = {
      infinite: false,
      speed: 600,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    };

    const mappingShit = (el) => {
      return (
        el.products &&
        el.products.map((el) => (
          <Product
            id={el.id}
            clickHandler={this.clickHandler}
            name={el.name}
            size={el.size[0].size}
            price={el.size[0].price}
            image_url={el.image_url}
            key={el.id}
          />
        ))
      );
    };

    return (
      <div Productslider>
        {products.item &&
          products.item.map((el, i) => {
            return (
              <div className="Productslider">
                <section
                  className={
                    i % 2 === 0
                      ? "light SliderContainer"
                      : "dark SliderContainer"
                  }
                >
                  <Sliderintro
                    name={el.category_info.name}
                    description={el.category_info.description}
                    catagoryallview={el.products.length}
                  />
                  <div className="sliderContents">
                    <div className="sliderContensWrap">
                      {el.products.length <= 3 ? (
                        mappingShit(el)
                      ) : (
                        <Slider {...settings}>{mappingShit(el)}</Slider>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
      </div>
    );
  }
}

export default withRouter(Productslider);
