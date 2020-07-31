import React from "react";
import "./ItemSlide.scss";

class ItemSlide extends React.Component {
  render() {
    return (
      <div className="slide">
        <div className="itemCarousel">
          <div className="listedItem">
            <img
              className="item1"
              alt="geranium body clanser"
              src="https://www.aesop.com/medias/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-medium.png?context=bWFzdGVyfGltYWdlc3wzOTkxMDN8aW1hZ2UvcG5nfGltYWdlcy9oZDgvaDRmLzg4MTQ5NzY0MzQyMDYucG5nfDg2MTAyMjI4ZjM2NGNlMjgzNGJhYmQzY2ZlMDIyOTAzY2RjODZmNDcxODllZjM1NDkxMzEzNDM0YTFkYTc1MTc"
            />
            <div className="itemDesc1">
              <p>제라늄 리프 바디 클렌저</p>
              <p>상쾌함을 선사하는 부드러운 젤 타입 클렌저</p>
            </div>
          </div>
          <div className="listedItem">
            <img
              className="item2"
              alt="geranium body clanser"
              src="https://www.aesop.com/medias/Aesop-Body-Rind-Concentrate-Body-Balm-120mL-large.png?context=bWFzdGVyfGltYWdlc3w1ODgyNjB8aW1hZ2UvcG5nfGltYWdlcy9oYzUvaDIxLzg3OTc0Mzk1OTA0MzAucG5nfDFiNGYxMGEzY2RlZGI4ZGJmZDQ5NDA0MmQ4NTZkZDlhYzI1OWNkYmNjNzhiYTZiMTM4MmY4MTNhNmNiYjVlZjY"
            />
            <div className="itemDesc2">
              <p>라인드 컨센트레이트 바디 밤</p>
              <p>빠른 흡수, 가벼운 수분 공급</p>
            </div>
          </div>
          <div className="listedItem">
            <img
              className="item3"
              alt="geranium body clanser"
              src="https://www.aesop.com/medias/Aesop-Body-Redemption-Body-Scrub-180mL-large.png?context=bWFzdGVyfGltYWdlc3w2NTYxNDJ8aW1hZ2UvcG5nfGltYWdlcy9oNzAvaDA1Lzg3OTc0MzkxNjQ0NDYucG5nfDhiMzBmOTE2NjBkZmFjOWE4NzM0ZjEwNmEyZTdkNjVhNjk1NzY4ZWJiZmQ3ZjE2M2NlNzU0MDIxOWZiNjJhMmQ"
            />
            <div className="itemDesc3">
              <p>리뎀션 바디 스크럽</p>
              <p>
                밤부사 불가리스줄기추출물과 부석이 피부 표면을 매끄럽게
                가꿔줍니다.
              </p>
            </div>
          </div>
          <div className="listedItem">
            <img
              className="item4"
              alt="geranium body clanser"
              src="https://www.aesop.com/medias/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png?context=bWFzdGVyfGltYWdlc3w2MDAwNzN8aW1hZ2UvcG5nfGltYWdlcy9oMWUvaGUyLzg4MTQ1NjMxOTY5NTgucG5nfDRlNmVlNWFkY2U5MTdjYWQyMTk4YTg5NjUxMzRlNTY4M2Y0NmQ0NzRlNzA5YTExYzI3OWVkNjIzYmYyNzdkYjA"
            />
            <div className="itemDesc4">
              <p>에이 로즈 바이 애니 아더 네임 바디 클렌저</p>
              <p>부드럽게 세정하는 향기로운 바디 클렌저</p>
            </div>
          </div>
          <div className="listedItem">
            <img
              className="item5"
              alt="geranium body clanser"
              src="https://www.aesop.com/medias/Aesop-Geranium-Leaf-Duet-with-Product-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0MTIxMzV8aW1hZ2UvcG5nfGltYWdlcy9oZTEvaGYyLzkxMTA3OTg5NTg2MjIucG5nfDMxNDhlMjJkMWY4NDZiNDU5NWJjMDcxZmM4MzljMmYxNjZhMDVmMTEzMTI1NDZkMTk3ODcxNzA5YjdmNDhlMDU"
            />
            <div className="itemDesc5">
              <p>제라늄 리프 듀엣</p>
              <p>바디 관리를 위한 클렌징과 밤으로 구성된 세트</p>
            </div>
          </div>
          <div className="listedItem">
            <img
              className="item6"
              alt="geranium body clanser"
              src="https://www.aesop.com/medias/Aesop-Body-Coriander-Seed-Body-Cleanser-500mL-large.png?context=bWFzdGVyfGltYWdlc3w2MDQ3MTJ8aW1hZ2UvcG5nfGltYWdlcy9oYzIvaDkxLzg4MTQ1NjQzNDM4MzgucG5nfGUwOTMxNGM2NDI2MjIyMTBjYTc1NDg0NzQ0NTdhOTNiYWNiM2Q1YzI5N2I4OTM1NGU3MmYxNjkzODU3NTA0OTg"
            />
            <div className="itemDesc6">
              <p>코리안더 씨드 바디 클렌저</p>
              <p>따뜻한, 스파이시향</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemSlide;
