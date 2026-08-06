import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/** Gold accent aligned with site --accent (#c9a66b) */
export const PortfolioAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fbf7f0',
      100: '#f4ead7',
      200: '#e8d4ad',
      300: '#dbbc86',
      400: '#d0ab72',
      500: '#c9a66b',
      600: '#b89255',
      700: '#967544',
      800: '#755c38',
      900: '#57442c',
      950: '#322617',
    },
  },
});
