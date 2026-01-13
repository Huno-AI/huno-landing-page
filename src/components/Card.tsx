/**
 * Card Component
 * Huno AI Design System
 * 
 * Elevated surface container with optional press handling
 * Supports day/night mode theming
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors, borderRadius, spacing, shadows } from '../constants/tokens';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  isDarkMode?: boolean;
  elevated?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: ViewStyle;
}

const paddingValues = {
  none: 0,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
};

export const Card: React.FC<CardProps> = ({
  children,
  onPress,
  isDarkMode = false,
  elevated = true,
  padding = 'md',
  style,
}) => {
  const backgroundColor = isDarkMode
    ? colors.surface.elevatedNight
    : colors.surface.elevatedDay;

  const cardStyle: ViewStyle = {
    backgroundColor,
    padding: paddingValues[padding],
    borderRadius: borderRadius.lg,
    ...(elevated && shadows.md),
  };

  if (onPress) {
    return (
      <TouchableOpacity
        style={[styles.card, cardStyle, style]}
        onPress={onPress}
        activeOpacity={0.85}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.card, cardStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
});

export default Card;
