import React, {Component} from "react";

export default class DistrictRadioInput extends Component {
  render() {
    return (
      <div className = 'radio-container'>
        <div className="radio">
          <input
            id = {this.props.value}
            className="radio-button"
            type="radio"
            name={this.props.name}
            defaultChecked = {this.props.selected}
          />
          <label className="radio-label" htmlFor = {this.props.value}> {this.props.value} </label>
        </div>
      </div>
    )
  }
}
