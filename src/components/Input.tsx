/**
 * Input Component
 * Huno AI Design System
 * 
 * Types: single line (default), multiline (textarea)
 * States: default, focused, error, disabled
 */

import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '../constants/tokens';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  hint?: string;
  multiline?: boolean;
  numberOfLines?: number;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  isDarkMode?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  multiline = false,
  numberOfLines = 4,
  containerStyle,
  inputStyle,
  isDarkMode = false,
  placeholder,
  editable = true,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const surfaceColor = isDarkMode
    ? colors.surface.elevatedNight
    : colors.surface.elevatedDay;

  const textColor = isDarkMode
    ? colors.text.inverse
    : colors.text.primary;

  const placeholderColor = isDarkMode
    ? 'rgba(255, 255, 255, 0.5)'
    : colors.text.disabled;

  const borderColor = error
    ? colors.feedback.error
    : isFocused
    ? colors.accent.violet
    : isDarkMode
    ? colors.stroke.dividerNight
    : colors.stroke.dividerDay;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            { color: isDarkMode ? colors.text.inverse : colors.text.secondary },
          ]}
        >
          {label}
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: surfaceColor,
            color: textColor,
            borderColor,
            minHeight: multiline ? numberOfLines * 24 + spacing.md * 2 : 48,
            textAlignVertical: multiline ? 'top' : 'center',
          },
          !editable && styles.disabled,
          inputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}

      {hint && !error && (
        <Text
          style={[
            styles.hint,
            { color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : colors.text.secondary },
          ]}
        >
          {hint}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: typography.reflection.fontSize,
    lineHeight: typography.reflection.lineHeight,
    fontFamily: typography.reflection.fontFamily,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    fontFamily: typography.body.fontFamily,
  },
  disabled: {
    opacity: 0.5,
  },
  error: {
    fontSize: typography.reflection.fontSize,
    lineHeight: typography.reflection.lineHeight,
    fontFamily: typography.reflection.fontFamily,
    color: colors.feedback.error,
    marginTop: spacing.xs,
  },
  hint: {
    fontSize: typography.reflection.fontSize,
    lineHeight: typography.reflection.lineHeight,
    fontFamily: typography.reflection.fontFamily,
    marginTop: spacing.xs,
  },
});

export default Input;
