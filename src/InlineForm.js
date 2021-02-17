import React from "react";
import TextField from "material-ui/TextField";
import EditOutlined from "@ant-design/icons";
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
  };

  render() {
    const { header} = this.props;
    return [
      header.map((y, k) => (
        <div key={`trc-${k}`}>
          <TextField
            name={y.prop}
            onChange={this.change}
            value={this.state.values[y.prop]}
          />
        </div>
      )),
      <div key="icon-row-column">
        <EditOutlined onClick={this.onSubmit} />
      </div>
    ];
  }
}