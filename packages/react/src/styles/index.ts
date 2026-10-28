import { colors, fontSizes, fonts, fontWeights, lineHeights, radius, space } from '@ignite-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
    },

    theme: {
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radius,
        space: space,
    },
});
