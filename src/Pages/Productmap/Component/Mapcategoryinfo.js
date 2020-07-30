import React, { Component } from "react";
import "./Mapcategoryinfo.scss";

class Mapcategoryinfo extends Component {
    constructor() {
        super();
    }

    render() {
   
      const category= this.props.categoryInfo;
        return(
            <>
            <div className="Mapcategoryinfo">
                    <div className="textTitleBOX">
                        <div className="introTitle">
                            <div className="introDescription">
                                <h2 className="introDescriptionHeadline" >
                                    {category.description_title}
                                </h2>
                                <p className="introDescriptionINFO">
                                    {category.description_content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Mapcategoryinfo;