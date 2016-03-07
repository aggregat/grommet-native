// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, Text } from 'react-native';

export default class Title extends Component {

  constructor (props) {
    super(props);
    this.state = { style: this._styleFromProps(props) };
  }

  _styleFromProps (props) {
    let style = { fontSize: 24, fontWeight: '600' };
    return style; //StyleSheet.create(style);
  }

  render () {
    const { style } = this.state;
    return (
      <Text style={style}>{this.props.children}</Text>
    );
  }

}
