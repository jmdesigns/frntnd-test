import React, { Component } from "react";

export default class RegionRadioInput extends Component {
  render() {
    return (
      <div className = 'radio-container'>
        <label className="radio" onChange={this.onRegionChange}>
          <span className="radio-box" />
          <input
            className="radio-button"
            type="radio"
            name={this.props.name}
            defaultChecked={this.props.currentRegion === this.props.value}
          />
          {this.props.value}
        </label>
      </div>
    );
  }

  onRegionChange = () => {
    this.props.onRegionChange(this.props.value);
  };
}
