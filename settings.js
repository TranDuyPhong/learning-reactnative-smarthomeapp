import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as theme from './theme';

const settings = {
    'light': {
        name: 'Light',
        icon: ({ size, color, ...props }) => (
            <MaterialCommunityIcons size={size || theme.sizes.font} color={color || theme.colors.accent} name='lightbulb-on-outline' {...props} />
        )
    },
    'ac': {
        name: 'AC',
        icon: ({ size, color, ...props }) => (
            <MaterialCommunityIcons size={size || theme.sizes.font} color={color || theme.colors.accent} name='air-conditioner' {...props} />
        )
    },
    'temperature': {
        name: 'Temperature',
        icon: ({ size, color, ...props }) => (
            <MaterialCommunityIcons size={size || theme.sizes.font} color={color || theme.colors.accent} name='temperature-celsius' {...props} />
        )
    },
    'fan': {
        name: 'Fan',
        icon: ({ size, color, ...props }) => (
            <MaterialCommunityIcons size={size || theme.sizes.font} color={color || theme.colors.accent} name='fan' {...props} />
        )
    },
    'wi-fi': {
        name: 'Wi-Fi',
        icon: ({ size, color, ...props }) => (
            <MaterialCommunityIcons size={size || theme.sizes.font} color={color || theme.colors.accent} name='wifi' {...props} />
        )
    },
    'electricity': {
        name: 'Electricity',
        icon: ({ size, color, ...props }) => (
            <MaterialCommunityIcons size={size || theme.sizes.font} color={color || theme.colors.accent} name='power' {...props} />
        )
    }
};

export default settings;