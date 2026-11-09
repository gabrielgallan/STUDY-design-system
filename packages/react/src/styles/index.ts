import { colors, fontSizes, fonts, fontWeights, lineHeights, radius, space } from '@gallan-ignite-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

const stitchesConfig = {
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
} as const;

type ConfiguredStitches = ReturnType<
    typeof createStitches<
        '',
        Record<never, never>,
        typeof stitchesConfig.theme,
        typeof stitchesConfig.themeMap,
        Record<never, never>
    >
>;

const stitches: ConfiguredStitches = createStitches(stitchesConfig);

export const styled: ConfiguredStitches['styled'] = stitches.styled;
export const css: ConfiguredStitches['css'] = stitches.css;
export const globalCss: ConfiguredStitches['globalCss'] = stitches.globalCss;
export const keyframes: ConfiguredStitches['keyframes'] = stitches.keyframes;
export const getCssText: ConfiguredStitches['getCssText'] = stitches.getCssText;
export const theme: ConfiguredStitches['theme'] = stitches.theme;
export const createTheme: ConfiguredStitches['createTheme'] = stitches.createTheme;
export const config: ConfiguredStitches['config'] = stitches.config;
