'use strict';

import React from 'react';
import radium from 'radium';
import Wrapper from 'cat-components/lib/wrapper';

import Normalize from 'componentsShare/Normalize';

@radium
class Index extends React.Component {
  render() {
    return (
      <div>
        This is Index!
      </div>
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