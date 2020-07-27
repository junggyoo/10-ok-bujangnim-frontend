import React from "react";
import Slider from "react-slick";
import Product from "./Product";
import Sliderintro from "./Sliderintro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productslider.scss";

class Productslider extends React.Component {
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

    return (
      <div Productslider>
        {products.map((el, i) => {
          return (
            <div className="Productslider">
              <section
                className={
                  i % 2 === 0 ? "light SliderContainer" : "dark SliderContainer"
                }
              >
                <Sliderintro
                  catagoryname={el.info.catagoryname}
                  catagorydescription={el.info.catagorydescription}
                  catagoryallview={el.info.catagoryallview}
                />
                <div className="sliderContents">
                  <div className="sliderContensWrap">
                    <Slider {...settings}>
                      {el.products.map((el) => (
                        <Product
                          id={el.id}
                          name={el.name}
                          size={el.size}
                          price={el.price}
                          image={el.image}
                          key={el.id}
                        />
                      ))}
                    </Slider>
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

export default Productslider;
