import React from "react";
import {CheckOutlined } from '@ant-design/icons';
import {Input} from 'antd';
import './App.css'
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        ...props.x
      }
    };
  }

  change = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();
      this.props.handleSave(this.props.i, this.state.values);
      console.log(this.state.values)
  };

  render() {
    const { header} = this.props;
    return [
      header.map((y, k) => (
        
        <div key={`trc-${k}`} className="inline-names" >
          <Input
            name={y.prop}
            onChange={this.change}
            value={this.state.values[y.prop]}
            style={{'font-size':'14px'}}
          />
        </div>
      )),
      <div key="icon-row-column" className="tick-icon">
        <CheckOutlined onClick={this.onSubmit} />
        <hr></hr>
      </div>
    ];
  }
}