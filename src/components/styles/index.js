import white from 'cat-components/lib/color/white';

import {greenBlue, darkAqua, greyishBrown} from 'components/share/styles/color';

export const pictureSlideshowRoot = {
  position: 'relative'
};

export const pictureSlideshow = {
  margin: '0px'
};

const icon = {
  position: 'absolute',
  top: 'calc(50% - 20px)',
  fill: white,
  fontSize: '40px',
  cursor: 'pointer'
};

export const rightIcon = {
  ...icon,
  right: '20px'
};

export const leftIcon = {
  ...icon,
  left: '20px'
};

export const menu = {
  position: 'relative',
  top: '-15px',
  display: 'grid',
  gridTemplateColumns: '20% 20% 20% 20% 20%',
  margin: 'auto',
  width: '100%',
  maxWidth: '800px',
  fontSize: '15px',
  color: white,
  background: greenBlue,
  textAlign: 'center',
  lineHeight: '60px',
  cursor: 'pointer'
};

export const list = {
  display: 'grid',
  gridTemplateColumns: 'calc(100% / 3) calc(100% / 3) calc(100% / 3)',
  gridGap: '20px 15px',
  margin: '25px auto 35px',
  width: '100%',
  maxWidth: '1000px'
};

export const listTitle = {
  margin: '0px 0px 10px',
  color: darkAqua
};

export const listImg = {
  margin: '0px 0px 15px',
  height: '150px',
  background: 'black'
};

export const listContent = {
  display: 'grid',
  gridTemplateColumns: '50px calc(100% - 50px)',
  color: greyishBrown
};

export const listDay = {
  fontSize: '30px'
};
