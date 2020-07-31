import React from "react";
import "./Quote.scss";

class Quote extends React.Component {
  render() {
    return (
      <div className="Quote">
        <blockquote className="quoteContent">
          <p className="quoteParagraph">
            ‘Know'st thou the land where the lemon-trees bloom?’
          </p>
          <p className="quoteAuthor">Johann Wolfgang von Goethe</p>
        </blockquote>
      </div>
    );
  }
}
export default Quote;
