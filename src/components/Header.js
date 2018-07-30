import React from 'react';
import radium from 'radium';
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon
} from 'react-icons/fa';

import * as styles from './styles/header';

@radium
export default class Header extends React.PureComponent {
  render() {
    return (
      <header style={styles.root}>
        <div>icon</div>

        <div style={styles.buttonRoot}>
          {[{
            text: 'SERVICE'
          }, {
            text: 'COMPANY'
          }, {
            text: 'INFORMATION'
          }, {
            text: 'CONTACT'
          }].map(({text}) => (
            <div
              key={text}
              style={styles.button}
            >
              {text}
            </div>
          ))}

          <div style={styles.iconButton}>
            <FacebookIcon style={styles.icon} />
          </div>

          <div style={styles.iconButton}>
            <InstagramIcon style={styles.icon} />
          </div>
        </div>
      </header>
    );
  }
}
