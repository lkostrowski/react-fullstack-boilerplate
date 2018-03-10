/**
 * Module with global CSS loaded into html.
 * Caution: Use only generic styles
 */

import { css } from 'glamor';
import './rwd';
import colors from './colors';
import './fonts';

css.global('html, body ', {
    padding: 0,
    margin: 0,
});

css.global('html', {
    fontSize: '10px', // Set rem to 10px
});

css.global('body', {
    fontSize: '1.4rem', // Base font size
});

css.global('*', {
    boxSizing: 'border-box',
});

css.global('a', {
    color: 'inherit',
    textDecoration: 'none',
});

css.global('img', {
    width: '100%',
    display: 'block',
});

css.global('h1, h2, h3, h4, h5, h6, p ', {
    margin: 0,
    fontWeight: 'normal',
});

css.global('button', {
    cursor: 'pointer',
});
