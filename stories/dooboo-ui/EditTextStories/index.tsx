import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import EditTextColumn from './EditTextColumnStory';
import EditTextRow from './EditTextRowStory';
import {ThemeProvider} from '../../../main/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'EditText',
};

export const columnStory = (): ReactElement => <EditTextColumn />;
export const rowStory = (): ReactElement => <EditTextRow />;

columnStory.light = {
  name: 'column (default) - light',
  notes: 'Default [EditText] with light mode.',
};

columnStory.dark = {
  name: 'column - dark',
  notes: 'Default [EditText] with dark mode.',
};

rowStory.light = {
  name: 'row - light',
  notes: '[EditText] in row.',
};

rowStory.dark = {
  name: 'row - dark',
  notes: '[EditText] in row with dark mode.',
};

/**
 * Below are stories for app
 */
storiesOf('EditText', module)
  .addDecorator(ContainerDeco)
  .add(
    columnStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <EditTextColumn />
      </ThemeProvider>
    ),
    {
      notes: columnStory.light.notes,
    },
  )
  .add(
    columnStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <EditTextColumn />
      </ThemeProvider>
    ),
    {
      notes: columnStory.dark.notes,
    },
  )
  .add(
    rowStory.light.name,
    () => (
      <ThemeProvider initialThemeType="light">
        <EditTextRow />
      </ThemeProvider>
    ),
    {
      notes: rowStory.light.notes,
    },
  )
  .add(
    rowStory.dark.name,
    () => (
      <ThemeProvider initialThemeType="dark">
        <EditTextRow />
      </ThemeProvider>
    ),
    {
      notes: rowStory.light.notes,
    },
  );
