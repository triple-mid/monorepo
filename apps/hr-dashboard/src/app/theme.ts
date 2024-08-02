'use client';

import { Arimo } from 'next/font/google';

import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

const FONT = Arimo({ subsets: ['latin', 'cyrillic'] });

export const DEFAULT_THEME = createTheme({
    fontFamily: FONT.style.fontFamily,
    primaryColor: 'orange',
    colors: {},
});

export const DEFAULT_VARS = themeToVars(DEFAULT_THEME);
