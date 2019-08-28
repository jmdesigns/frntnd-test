import React, { Component } from "react";

export default class RegionRadioInput extends Component {
  render() {
    return (
      <div className = 'radio-container'>
        <div className = 'radio'>
          <input
            id = {this.props.value}
            className="radio-button"
            type="radio"
            name={this.props.name}
            defaultChecked={this.props.currentRegion === this.props.value}
            onChange = {this.onRegionChange}
          />
          <label className = 'radio-label' htmlFor = {this.props.value}>{this.props.value}</label>
        </div>
      </div>
    );
  }

  onRegionChange = () => {
    this.props.onRegionChange(this.props.value);
  };
}
