import React, { Component } from "react";

import DistrictRadioInput from "../DistrictRadioInput/DistrictRadioInput";

export default class DistrictSelector extends Component {
  render() {
    return (
      <form>
        <div className = 'selector'>
          {this.props.list.map((area, index) => (
            <DistrictRadioInput
              key={area}
              value={area}
              name={this.props.group}
              selected = {index === 0}
            />
          ))}
        </div>
      </form>
    )
  }
}
