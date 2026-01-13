/**
 * Huno AI Design Tokens
 * Core design system values for consistent styling across the app
 */

export const colors = {
  // Text colors
  text: {
    primary: '#000000',
    secondary: '#4A4A4A',
    inverse: '#FFFFFF',
    disabled: 'rgba(74, 74, 74, 0.5)',
  },

  // Accent colors
  accent: {
    violet: '#8C7ED9',
    green: '#90BCA5',
    peach: '#F6C7A8',
  },

  // Feedback colors
  feedback: {
    success: '#71B996',
    error: '#D45B5B',
    disabled: '#C8C8C8',
  },

  // Surface colors
  surface: {
    baseDay: '#F9EFC8',
    baseNight: '#0D2144',
    elevatedDay: 'rgba(255, 255, 255, 0.9)',
    elevatedNight: '#162A52',
    scrim: 'rgba(0, 0, 0, 0.4)',
  },

  // Stroke colors
  stroke: {
    dividerDay: 'rgba(0, 0, 0, 0.12)',
    dividerNight: 'rgba(255, 255, 255, 0.16)',
  },
} as const;

export const typography = {
  heading: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700' as const,
    fontFamily: 'Roboto-Bold',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700' as const,
    fontFamily: 'Roboto-Bold',
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400' as const,
    fontFamily: 'Roboto-Regular',
  },
  reflection: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
    fontFamily: 'Roboto-Regular',
  },
  placeholder: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700' as const,
    fontFamily: 'Roboto-Bold',
  },
  nav: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const,
    fontFamily: 'Roboto-Regular',
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

// Type exports for TypeScript
export type ColorToken = typeof colors;
export type TypographyToken = typeof typography;
export type SpacingToken = typeof spacing;
