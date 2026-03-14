import { createSystem, defaultConfig } from '@chakra-ui/react';
export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: '#E6F1F6' },
          100: { value: '#C2DCE8' },
          200: { value: '#9BC6DA' },
          300: { value: '#73AFCC' },
          400: { value: '#4B98BE' },
          500: { value: '#004165' }, // Toastmasters navy
          600: { value: '#003652' },
          700: { value: '#00293E' },
          800: { value: '#001D2B' },
          900: { value: '#001118' },
        },
        teal: {
          50: { value: '#E6F7F9' },
          100: { value: '#C1EBEF' },
          200: { value: '#99DDE3' },
          300: { value: '#70CFD6' },
          400: { value: '#47C1CA' },
          500: { value: '#0097A9' }, // logo teal
          600: { value: '#007987' },
          700: { value: '#005C65' },
          800: { value: '#003F43' },
          900: { value: '#002022' },
        },
        orange: {
          50: { value: '#FFF3E8' },
          100: { value: '#FFE0C7' },
          200: { value: '#FFCCA3' },
          300: { value: '#FFB780' },
          400: { value: '#FFA35C' },
          500: { value: '#F58220' }, // logo orange
          600: { value: '#D66F1A' },
          700: { value: '#A85714' },
          800: { value: '#7A3F0E' },
          900: { value: '#4D2708' },
        },
        red: {
          50: { value: '#FDEBEC' },
          100: { value: '#F7C5C9' },
          200: { value: '#F19EA6' },
          300: { value: '#EB7883' },
          400: { value: '#E55160' },
          500: { value: '#CD202C' }, // Toastmasters red
          600: { value: '#A61A24' },
          700: { value: '#7F141B' },
          800: { value: '#590E13' },
          900: { value: '#33080A' },
        },
        neutral: {
          50: { value: '#F6F9FB' },
          100: { value: '#E9EFF4' },
          200: { value: '#D6E1E8' },
          300: { value: '#C3D2DC' },
          400: { value: '#AEBFC9' },
          500: { value: '#8FA4B0' },
          600: { value: '#6C7F8B' },
          700: { value: '#4A5964' },
          800: { value: '#2B343C' },
          900: { value: '#14181C' },
        },
        custom: {
          red: { value: '#ca002a' },
          yellow: { value: '#eec90f' },
          green: { value: '#38c514' },
        },
      },
      fonts: {
        heading: { value: 'Work Sans, sans-serif' },
        body: { value: 'IBM Plex Sans, sans-serif' },
        mono: { value: 'IBM Plex Mono, monospace' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {
              _light: '{colors.neutral.50}',
              _dark: '{colors.primary.800}',
            },
          },
          subtle: {
            value: {
              _light: '{colors.neutral.100}',
              _dark: '{colors.primary.700}',
            },
          },
          panel: {
            value: {
              _light: 'white',
              _dark: '{colors.primary.700}',
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: '{colors.primary.700}',
              _dark: 'white',
            },
          },
          muted: {
            value: {
              _light: '{colors.neutral.700}',
              _dark: '{colors.neutral.200}',
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              _light: '{colors.neutral.200}',
              _dark: '{colors.primary.600}',
            },
          },
        },
        primary: {
          solid: { value: '{colors.primary.500}' },
          emphasized: { value: '{colors.primary.600}' },
          subtle: { value: '{colors.primary.100}' },
          muted: { value: '{colors.primary.200}' },
          contrast: { value: 'white' },
          focusRing: { value: '{colors.primary.400}' },
        },
        accent: {
          solid: { value: '{colors.teal.500}' },
          emphasized: { value: '{colors.teal.600}' },
          subtle: { value: '{colors.teal.100}' },
          muted: { value: '{colors.teal.200}' },
          contrast: { value: 'white' },
        },
        highlight: {
          solid: { value: '{colors.orange.500}' },
          emphasized: { value: '{colors.orange.600}' },
          subtle: { value: '{colors.orange.100}' },
        },
        danger: {
          solid: { value: '{colors.red.500}' },
          emphasized: { value: '{colors.red.600}' },
          subtle: { value: '{colors.red.100}' },
        },
        cards: {
          red: { value: '{custom.red}' },
          yellow: { value: '{custom.yellow}' },
          green: { value: '{custom.green}' },
        },
      },
    },
  },
});
