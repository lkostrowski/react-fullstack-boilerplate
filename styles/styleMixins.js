import { css } from 'glamor';
import { rgba } from 'polished';
import { containerWidth } from './styleVars';
import colors from './colors';

/* eslint-disable import/prefer-default-export */

export const resetFocus = css({
    '&:focus': {
        boxShadow: 'none',
        outline: 'none',
    },
});

export const container = css({
    margin: '0 auto',
    padding: '0 2rem',
    maxWidth: containerWidth,
});

export const list = css({
    margin: 0,
    padding: 0,
    listStyle: 'none',
});

export const borderRadius = css({
    borderRadius: '0.3rem',
});

export const letterSpacing = css({
    letterSpacing: '0.1em',
});

export const blockScroll = css({
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
});

// Make function mixin
export const boxShadow = css({
    boxShadow: `3px 3px 5px -1px ${rgba(colors.black, 0.4)}`,
});

export const section = css({
    padding: '2rem',
});

export const thinText = css({
    fontWeight: 200,
});

export const buttonReset = css({
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    background: 'transparent',
    padding: 0,
    margin: 0,
});

/* eslint-enable import/prefer-default-export */
