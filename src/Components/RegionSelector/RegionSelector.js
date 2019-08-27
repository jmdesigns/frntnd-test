import React, { Component } from "react";

import RegionRadioInput from "../RegionRadioInput/RegionRadioInput";

export default class RegionSelector extends Component {
  componentDidMount() {}

  render() {
    return (
      <form>
        <div className="selector">
          {this.props.list.map((area, index) => (
            <RegionRadioInput
              key={index}
              value={area}
              name={this.props.group}
              currentRegion={this.props.currentRegion}
              onRegionChange={this.onRegionChange}
            />
          ))}
        </div>
      </form>
    );
  }

  onRegionChange = val => {
    this.props.onRegionChange(val);
  };
}
