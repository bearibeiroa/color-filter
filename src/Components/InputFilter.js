import React, { Component } from 'react';
import colors from '../colorsData';

import '../App.css'

class InputFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      colors: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  }

  render() {
    const { filterText } = this.state;

    return (
      <>
        <label className= "label-filter" >
          Digite uma cor:
          <input
            className="input-filter"
            value={filterText}
            type="text"
            onChange={this.handleChange} />
        </label>
        <ul>
          {colors
            .filter(({ name }) => name.includes(filterText))
            .map(({ name, hex }) => (
              <li key={hex}>
                <span style={{ background: hex }} className="color-display" />
                {name}
              </li>
            ))}
        </ul>

      </>
    )
  }
}

export default InputFilter;
