import React, { Component, Fragment } from "react";
import regions from "./districts.json";

import DistrictSelector from "../DistrictSelector/DistrictSelector";
import RegionSelector from "../RegionSelector/RegionSelector";

export default class SelectorContainer extends Component {
  constructor() {
    super()

    this.reg = [];
    regions.regions.forEach(element => {
      this.reg.push(element.name);
    })

    this.state = {
      regions: this.reg,
      districts: [],
      currentRegion: "Praha",
    }
  }

  componentDidMount() {
    this.handleDistrictsChange(this.state.currentRegion);
  }

  render() {
    return (
      <Fragment>
        <RegionSelector
          list={this.state.regions}
          group="regions"
          currentRegion={this.state.currentRegion}
          onRegionChange={this.handleRegionChange}
        />
        <h2>Vyberte okres</h2>
        <DistrictSelector
          list={this.state.districts}
          group="district"
        />
      </Fragment>
    )
  }

  handleDistrictsChange = val => {
    regions.regions.forEach(element => {
      if (element.name === val) {
        this.setState({
          districts: element.districts
        })
      }
    })
  }

  handleRegionChange = val => {
    this.setState({
      currentRegion: val
    })

    this.handleDistrictsChange(val)
  };
}
