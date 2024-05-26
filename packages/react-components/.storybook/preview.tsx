import React from 'react';
import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import '../docs/global.css'

const MyDocsContainer = ({ children, context }) => (
  <DocsContainer context={context}>
    <div className='bg-slate-50 dark:bg-zinc-700'>{children}</div>
  </DocsContainer>
);

export const decorators = [
  withThemeByDataAttribute<ReactRenderer>({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    controls: {
      hideNoControlsWarning: true,
    },
    docs: {
      container: MyDocsContainer,
    },
  },
};

export default preview;
