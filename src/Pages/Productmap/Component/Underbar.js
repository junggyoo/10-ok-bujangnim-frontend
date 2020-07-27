import React, { Component } from "react";
import "./Underbar.scss";

class Underbar extends Component {
    constructor() {
        super();
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/data/mocup.json")
            .then(res => res.json())
            .then(res => {
                this.setState({products : res})
            })
    }

    render() {
        return(
            <div className="nextpageDark">
                <div className="nextpageWrapper">
                    <div className="nextpageImgWrapper">
                        <div className="nextpageImgBOX">
                            <img className="nextpageImgSize" src="https://www.aesop.com/medias/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-small.png?context=bWFzdGVyfGltYWdlc3wxODQyNTB8aW1hZ2UvcG5nfGltYWdlcy9oZDYvaDViLzg3OTc0NDY1MzcyNDYucG5nfDkxZjEyOWIzNzE2YjBhYjg2MGJjOWU5ZjE0ZTFmYjBiZDcyYzU4OTY4NjNlMDVlZDZmOTVmZjFhYWU1MmIxMTY" />
                        </div>
                    </div>
                    <div className="nextpageInfo">
                        <h5 className="nextpageInfoTitle">다음 단계</h5>
                        <h2 className="nextpageInfoContent">마찰로 만드는 아름다움</h2>
                        <div className="nextpageBtnWrapper">
                            <button className="nextpageBtn" type="button">
                                <div className="btnContent">
                                    <span className="btnLabel">각질제거</span>
                                    <svg className="btnIconBector" role="img" viewBox="0 0 50 50">
                                        <g>
                                            <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Underbar;