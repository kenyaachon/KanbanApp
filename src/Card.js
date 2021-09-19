import React, { Component } from "react";
import CheckList from "./CheckList";
import marked from "marked";

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false,
    };
  }

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  //this how we add a colored line next to each card
  sideColors() {
    return {
      position: "absolute",
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color,
    };
  }
  render() {
    let cardDetails;
    //determines if the toggle has been pressed
    //in order to make our styling on html work we needed the dangerouslySetInnerHTML
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span
            dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
          />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }

    let sideColor = this.sideColors();
    //when the toggle is displayed, it changes the state of showDetails
    return (
      <div className="card">
        <div style={sideColor} />
        <div
          className={
            this.state.showDetails
              ? "card__title card__title--is-open"
              : "card__title"
          }
          onClick={this.toggleDetails.bind(this)}
        >
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }

  //   render() {
  //     return (
  //       <div className="card">
  //         <div className="card__title">{this.props.title}</div>
  //         <div className="card__details">
  //           {this.props.description}
  //           <CheckList cardId={this.props.id} tasks={this.props.tasks} />
  //         </div>
  //       </div>
  //     );
  //   }
}

export default Card;
