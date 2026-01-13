/**
 * Button Component
 * Huno AI Design System
 * 
 * Variants: primary (violet), neutral (peach), error (red)
 * States: default, pressed, disabled, loading
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '../constants/tokens';

type ButtonVariant = 'primary' | 'neutral' | 'error';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const variantStyles = {
  primary: {
    background: colors.accent.violet,
    text: colors.text.inverse,
    pressedBackground: '#7A6CC7', // Slightly darker violet
  },
  neutral: {
    background: colors.accent.peach,
    text: colors.text.primary,
    pressedBackground: '#E5B697', // Slightly darker peach
  },
  error: {
    background: colors.feedback.error,
    text: colors.text.inverse,
    pressedBackground: '#C34A4A', // Slightly darker red
  },
};

const sizeStyles = {
  sm: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    fontSize: 14,
    lineHeight: 18,
  },
  md: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontSize: typography.button.fontSize,
    lineHeight: typography.button.lineHeight,
  },
  lg: {
    paddingVertical: spacing.lg - 4,
    paddingHorizontal: spacing.xl,
    fontSize: typography.button.fontSize,
    lineHeight: typography.button.lineHeight,
  },
};

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
  onPress,
  ...rest
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDisabled
            ? colors.feedback.disabled
            : variantStyle.background,
          paddingVertical: sizeStyle.paddingVertical,
          paddingHorizontal: sizeStyle.paddingHorizontal,
        },
        fullWidth && styles.fullWidth,
        style,
      ]}
      activeOpacity={0.8}
      disabled={isDisabled}
      onPress={onPress}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          color={variantStyle.text}
          size="small"
        />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: isDisabled ? colors.text.disabled : variantStyle.text,
              fontSize: sizeStyle.fontSize,
              lineHeight: sizeStyle.lineHeight,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontFamily: typography.button.fontFamily,
    fontWeight: typography.button.fontWeight,
    textAlign: 'center',
  },
});

export default Button;
