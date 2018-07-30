import white from 'cat-components/lib/color/white';

import {greenBlue, greyishBrown} from 'components/share/styles/color';

export const root = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '9px 26px'
};

export const buttonRoot = {
  display: 'flex',
  color: greenBlue
};

export const button = {
  display: 'flex',
  alignItems: 'flex-end',
  padding: '5px 12px 5px',
  height: '27px',
  cursor: 'pointer'
};

export const iconButton = {
  ...button,
  padding: '5px'
};

export const icon = {
  padding: '5px',
  color: white,
  background: greyishBrown,
  borderRadius: '50%',
  fontSize: '12px'
};
