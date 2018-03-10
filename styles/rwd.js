import { css } from 'glamor';

const breakpoints = {
    tablet: 768, // Below is mobile
    desktop: 1025, // above is desktop
    fixedWidth: 1540, // Above this breakpoint 1rem = 10px
};

const media = {
    mobile: {
        only: `@media only screen and (max-width: ${breakpoints.tablet - 1}px)`,
    },
    tablet: {
        only: `@media only screen and (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
        down: `@media only screen and (max-width: ${breakpoints.desktop - 1}px)`,
        up: `@media only screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
        only: `@media only screen and (min-width: ${breakpoints.desktop}px)`,
    },
};

/**
 * Dynamic REM, depending on browser width. Above fixedWidth breakpoint, 1rem will be always 10px.
 * Below it, between fixedWidth and tablet it will change, the same for mobile
 */
css.insert(`
  @media screen and (max-width: ${breakpoints.fixedWidth}px) {
    html {
      font-size: calc(100vw / ${breakpoints.fixedWidth / 10});
    }
  }

  ${media.tablet.down} {
    html {
      font-size: calc(100vw / 50);
    }
  }

  ${media.mobile.only} {
    html {
      font-size: calc(100vw / 40);
    }
  }
`);


export { media, breakpoints };
