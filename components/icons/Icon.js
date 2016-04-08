// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react-native';
import Svg, { G, Rect, Path } from 'react-native-art-svg';
import { spacingUnit, colorForIndex } from '../../style';

const SIZE = {
  small: spacingUnit / 2,
  medium: spacingUnit,
  large: spacingUnit * 2,
  huge: spacingUnit * 12
};

export default class Icon extends Component {

  constructor (props) {
    super(props);
    this.state = {
      color: colorForIndex(props.colorIndex),
      size: SIZE[props.size]
    };
  }

  render () {
    const { pathCommands, children } = this.props;
    const { color, size } = this.state;
    let contents;
    if (pathCommands) {
      contents = (
        <Path fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10"
          d={pathCommands}/>
      );
    } else if (children) {
      contents = children;
    }
    return (
      <Svg version="1.1" viewbox="0 0 24 24" width={size} height={size}>
        <G>
          <Rect x="0" y="0" fill="none" width="24" height="24"/>
          {contents}
        </G>
      </Svg>
    );
  }
};

Icon.propTypes = {
  colorIndex: PropTypes.string,
  pathCommands: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge'])
};

Icon.defaultProps = {
  colorIndex: 'icon',
  size: 'medium'
};

Icon.icon = true;
