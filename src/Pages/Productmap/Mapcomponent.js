import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Mapgoods from "./Component/Mapgoods";
import Underbar from "./Component/Underbar";
import "./Mapcomponent.scss";

class Mapcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }  


    render() {
        return(
            <div className="Mapcomponent">
                <div className="textTitleBOX">
                    <div className="introTitle">
                        <div className="introDescription">
                            <h2 className="introDescriptionHeadline" >
                                처음의 시작
                            </h2>
                            <p className="introDescriptionINFO">
                                각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
                            </p>
                        </div>
                        {/* 있어서 만들긴했는데, 왜 있는지 모르겠는 기능 */}
                        {/* <div className="introCategoryLinkBOX">
                            <link className="introCategoryLink" href="_blank">
                                <div className="introCategoryBOXWrapper">
                                    <span className=introCategoryTEXT" />
                                </div>
                            </link>
                        </div> */}
                    </div>
                    <Mapgoods></Mapgoods>
                    <Underbar className="underbarcontrol"></Underbar>
                </div> 
            </div>
        )
    }
}

export default Mapcomponent;