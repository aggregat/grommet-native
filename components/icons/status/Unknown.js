// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react-native';
import { G, Circle, Path } from 'react-native-svg';
import { svgColorForIndex } from '../../../style';
import Icon from '../Icon';

export default class Unknown extends Component {

  render () {
    const { inverse, disabled, size } = this.props;
    let fill, detailColor;
    if (disabled) {
      fill = svgColorForIndex('unset');
      detailColor = svgColorForIndex('colored');
    } else if (inverse) {
      fill = svgColorForIndex('colored');
      detailColor = svgColorForIndex('unknown');
    } else {
      fill = svgColorForIndex('unknown');
      detailColor = svgColorForIndex('colored');
    }
    let detail;
    if ('small' !== size) {
      detail = (
        <G>
          <Path fill="none" strokeWidth="2" strokeLinecap="butt"
            stroke={detailColor.color} strokeOpacity={detailColor.opacity}
            d="M9,10.4 C9,8.8 10.4,7.6 12,7.6 C13.6,7.6 14.9,9 15,10.4 C15,11.7 14.1,12.7 12.9,13.1 C12.4,13.2 12,13.7 12,14.2 L12,15.5" />
          <Circle fill={detailColor.color}
            fillOpacity={detailColor.opacity} cx="12" cy="17.6" r="1" />
        </G>
      );
    } else {
      detail = <Path stroke="none" fill="none" />;
    }
    return (
      <Icon size={size}>
        <Path fill={fill.color} fillOpacity={fill.opacity}
          d="M12,2 C17.5,2 22,6.5 22,12 C22,17.5 17.5,22 12,22 C6.5,22 2,17.5 2,12 C2,6.5 6.5,2 12,2 L12,2 Z M12,0 C5.4,0 0,5.4 0,12 C0,18.6 5.4,24 12,24 C18.6,24 24,18.6 24,12 C24,5.4 18.6,0 12,0 L12,0 L12,0 Z" />
        {detail}
      </Icon>
    );
  }
};

Unknown.propTypes = {
  disabled: PropTypes.bool,
  inverse: PropTypes.bool,
  size: Icon.propTypes.size
};

Unknown.icon = true;
