'use strict';

import React from 'react';
import radium from 'radium';
import Wrapper from 'cat-components/lib/wrapper';
import PictureSlideshow from 'cat-components/lib/picture-slideshow';
import {
  MdChevronRight as RightIcon,
  MdChevronLeft as LeftIcon
} from 'react-icons/md';

import Normalize from 'components/share/Normalize';

import Header from './Header';
import * as styles from './styles';

const imgs = [{
  src: ''
}, {
  src: ''
}, {
  src: ''
}];

@radium
class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    const {index} = this.state;

    return (
      <React.Fragment>
        <Header />

        <div style={styles.pictureSlideshowRoot}>
          <PictureSlideshow
            style={styles.pictureSlideshow}
            index={index}
            imgs={imgs}
          />

          <LeftIcon style={styles.leftIcon} />

          <RightIcon style={styles.rightIcon} />
        </div>

        <div style={styles.menu}>
          {[].constructor.apply({}, new Array(5)).map((_, index) => (
            <div key={index}>
              小分類標籤
            </div>
          ))}
        </div>

        <div style={styles.list}>
          {[].constructor.apply({}, new Array(6)).map((_, index) => (
            <div key={index}>
              <div style={styles.listTitle}>
                學習成果日誌
              </div>

              <div style={styles.listImg} />

              <div style={styles.listContent}>
                <div>
                  2018

                  <br />

                  <font style={styles.listDay}>
                    8/1
                  </font>
                </div>

                <div>
                  普台的暑輔要開始，又要忙碌一陣，尤其是埔里學系列的語言調查、地質調查。
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}>
    <div>
      <Normalize />

      <Index {...props} />
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
