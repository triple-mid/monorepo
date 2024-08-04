'use client';

import { Arimo } from 'next/font/google';

import {
    Button,
    Paper,
    PinInput,
    SegmentedControl,
    Select,
    Skeleton,
    TextInput,
    Textarea,
    createTheme,
} from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

const FONT = Arimo({ subsets: ['latin', 'cyrillic'] });

export const DEFAULT_THEME = createTheme({
    fontFamily: FONT.style.fontFamily,
    primaryColor: 'orange',
    colors: {},
    components: {
        SegmentedControl: SegmentedControl.extend({
            defaultProps: {
                radius: 'lg',
                size: 'lg',
            },
        }),
        TextInput: TextInput.extend({
            defaultProps: {
                radius: 'lg',
                size: 'lg',
            },
        }),
        Textarea: Textarea.extend({
            defaultProps: {
                radius: 'lg',
                size: 'lg',
            },
        }),
        Select: Select.extend({
            defaultProps: {
                radius: 'lg',
                size: 'lg',
            },
        }),
        Button: Button.extend({
            defaultProps: {
                size: 'lg',
                radius: 'lg',
            },
        }),
        PinInput: PinInput.extend({
            styles: {
                input: { borderRadius: 18 },
            },
        }),
        Paper: Paper.extend({
            defaultProps: {
                radius: 32,
            },
            styles: {
                root: { padding: 20 },
            },
        }),
        Skeleton: Paper.extend({
            defaultProps: {
                radius: 32,
                w: '100%',
            },
        }),
    },
});

export const DEFAULT_VARS = themeToVars(DEFAULT_THEME);
