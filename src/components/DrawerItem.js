/* @flow */

import color from 'color';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon';
import TouchableRipple from './TouchableRipple';
import withTheme from '../core/withTheme';
import type { Theme } from '../types';
import type { IconSource } from './Icon';

type Props = {
  /**
   * The label text of the item.
   */
  label: string,
  /**
   * Icon to display for the `DrawerItem`.
   */
  icon?: IconSource,
  /**
   * Whether to highlight the drawer item as active.
   */
  active?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * @optional
   */
  theme: Theme,
};

/**
 * DrawerItem is a component used to show an action item with an icon and a label in a navigation drawer.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DrawerItem } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <DrawerItem label="First Item" />
 * );
 * ```
 */
class DrawerItem extends React.Component<Props> {
  render() {
    const { icon, label, active, theme, ...props } = this.props;
    const { colors, roundness } = theme;
    const backgroundColor = active
      ? color(colors.primary)
          .alpha(0.12)
          .rgb()
          .string()
      : 'transparent';
    const contentColor = active
      ? colors.primary
      : color(colors.text)
          .alpha(0.68)
          .rgb()
          .string();
    const fontFamily = theme.fonts.medium;
    const labelMargin = icon ? 32 : 0;

    return (
      <TouchableRipple
        {...props}
        style={[styles.touchable, { borderRadius: roundness }]}
      >
        <View
          style={[styles.wrapper, { backgroundColor, borderRadius: roundness }]}
        >
          {icon && <Icon source={icon} size={24} color={contentColor} />}
          <Text
            numberOfLines={1}
            style={{
              color: contentColor,
              fontFamily,
              marginLeft: labelMargin,
              marginRight: 32,
            }}
          >
            {label}
          </Text>
        </View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: 10,
    marginVertical: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    height: 40,
  },
});

export default withTheme(DrawerItem);
