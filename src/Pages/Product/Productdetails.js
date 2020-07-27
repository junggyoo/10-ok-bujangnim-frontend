import React from "react";
import Nav from "../../Components/Nav";
import Aesoplogo from "../../Components/Aesoplogo";
import Footer from "../../Components/Footer";
import Recommendproduct from "./Components/Recommendproduct";
import Slider from "react-slick";
import { productDetailTopImg } from "../../config";
import { recommendMockUpData } from "../../config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productdetails.scss";

class Productdetails extends React.Component {
  state = {
    products: [],
    isToggleOn: false,
  };

  addViewHanddler = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  componentDidMount() {
    fetch(`${recommendMockUpData}`)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.products }));
  }
  render() {
    const { products } = this.state;
    const { addViewHanddler } = this;

    const settings = {
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <section
        className={
          this.state.isToggleOn === true
            ? "darkTop Productdetails"
            : "lightTop Productdetails"
        }
      >
        {/* Top Details */}
        <div
          className={
            this.state.isToggleOn === true
              ? "come ClickIngredientContainer"
              : "out ClickIngredientContainer"
          }
        >
          <button className="closeBtn" onClick={addViewHanddler}>
            <svg
              aria-labelledby="967c9b61-373e-472d-bf79-019e47aecf1e"
              class="closeBtnIcon"
              role="img"
              viewBox="0 0 50 50"
            >
              <title id="967c9b61-373e-472d-bf79-019e47aecf1e">Close</title>
              <g>
                <polygon points="50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25"></polygon>
              </g>
            </svg>
          </button>
          <div className="productIngredientWrapper">
            <ul className="content">
              <li className="title">성분</li>
              <li className="info">포도씨오일, 토코페롤, 마트리카리아꽃오일</li>
              <li className="reference">
                성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
                목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
              </li>
            </ul>
          </div>
        </div>
        <Nav />
        <article className="details">
          <div className="logoAndImg">
            <div className="logoContainer">
              <div className="logo">
                <Aesoplogo />
              </div>
            </div>
            <div className="imageContainer">
              <img
                src={productDetailTopImg}
                alt="img
              "
              />
              <div>
                <span>60 mL</span>
              </div>
            </div>
          </div>
          <div className="productInfo">
            <div className="sort">
              <ul className="sortContainer">
                <li>스킨</li>
                <li className="circlePoint">립 & 아이</li>
              </ul>
            </div>
            <div className="productName">
              <h1 className="name">아이 리무버</h1>
            </div>
            <div className="productExplanation">
              <p className="explan">
                눈 주위의 민감한 피부를 달래고 진정시켜주는 마트리카리아가
                포함된 부드러운 오일 제형의 아이 메이크업 리무브
              </p>
            </div>
            <div className="infoContainer">
              <ul className="infoList">
                <li className="skinTypeBox">
                  <div className="skinType">피부 타입</div>
                  <div className="description">
                    모든 피부, 메이크업을 한 피부
                  </div>
                </li>
                <li className="usabilityBox">
                  <div className="usability">사용감</div>
                  <div className="description">진정된, 생기있는</div>
                </li>
                <li className="mainIngredientBox">
                  <div className="ingredientWrap">
                    <div className="mainIngredient">주요 성분</div>
                    <button
                      className={
                        this.state.isToggleOn === true
                          ? "on moreBtn"
                          : "moreBtn"
                      }
                      onClick={addViewHanddler}
                    >
                      <span className="moreBtnIcon">+</span>
                    </button>
                  </div>
                  <div className="description">
                    그레이프 씨드, 토코페롤, 마트리카리아꽃오일
                  </div>
                </li>
              </ul>
              <div className="cartAdd">
                <button className="cartBtn">
                  <span>카트에 추가 — ₩ 30,000</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Center Explanation */}
        <article className="useExplanation">
          <section className="imgVedioContainer">
            <div className="imgBox">
              <img
                className="explanImg"
                src="https://www.aesop.com/medias/Aesop-Skin-Remove-Hybris-Secondary-Texture-50-50-Desktop-1440x1500px.jpg?context=bWFzdGVyfGltYWdlc3wzNTg1MHxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaGJiLzkzOTI2MjMyMjI4MTQuanBnfDkyZjJiNWQyYjMxNGFlNjM3NWFiMDgzNTIyNzE1Y2E0MDMwNGNiOTVkY2I1NjlmYzdkOGVhMjU3NDRiZWEzYjU"
              />
              <div className="vediobtnBox">
                <button className="vedioBtn">
                  <div className="btnIconWrap">
                    <span className="iconBox">
                      <svg
                        aria-labelledby="c787461c-ce1d-4918-820f-3a3d5f4636bb"
                        className="iconPlay"
                        role="img"
                        viewBox="0 0 8 11"
                      >
                        <title id="c787461c-ce1d-4918-820f-3a3d5f4636bb">
                          재생
                        </title>
                        <g>
                          <polyline points="0,0 8,5.5 0,11"></polyline>
                        </g>
                      </svg>
                    </span>
                    <span className="btnText">비디오 보기</span>
                  </div>
                </button>
              </div>
            </div>
          </section>
          <section
            className={
              this.state.isToggleOn === true
                ? "dark explanationContainer"
                : "light explanationContainer"
            }
          >
            <ul className="explanList">
              <li className="howToUse">
                <spna>사용법</spna>
                <h2>
                  젖은 화장솜에 덜어 아이 메이크업 제품이 용해될 때까지 기다렸다
                  닦아냅니다
                </h2>
              </li>
              <li className="useAmountBox">
                <div className="useAount">사용량</div>
                <div className="description">5-7방울</div>
              </li>
              <li className="textureBox">
                <div className="texture">텍스처</div>
                <div className="description">가벼운, 오일 타입</div>
              </li>
              <li className="scentBox">
                <div className="scent">향</div>
                <div className="description">허브향, 플로랄, 너티</div>
              </li>
            </ul>
          </section>
        </article>

        {/* Bottom Recommend */}
        <article className="recommend">
          <div className="recommendIntro">
            <h2 className="introTitle">함께 사용하면 좋은 제품</h2>
            <div className="content">
              <p>
                퓨리파잉 페이셜 크림 클렌저에 섞어 사용하여 데일리 클렌저로
                사용할 수 있습니다. 세안 후 피부의 영양 공급 및 보충을 위해,
                파슬리 씨드 안티 옥시던트 하이드레이터를 사용해보세요. 밤에는
                파슬리 씨드 안티 옥시던트 아이 세럼을 사용하여 민감한 눈 주위
                피부에 수분과 활력을 선사하세요.
              </p>
            </div>
          </div>
          <div className="prodcutContainer">
            <div className="productWrapper">
              <Slider {...settings}>
                {products.map((product) => (
                  <Recommendproduct
                    id={product.id}
                    title={product.title}
                    content={product.content}
                    name={product.name}
                    image={product.image}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="progressBar"></div>
        </article>
        <Footer />
      </section>
    );
  }
}

export default Productdetails;
