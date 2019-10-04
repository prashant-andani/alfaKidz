import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button/Button';

storiesOf('Button', module)
  .addWithJSX('Primary Button', () => <Button className="btn">Create New</Button>)
  .addWithJSX('Disabled Button', () => (
    <Button disabled className="btn" label="Example Button">
      Review & Publish
    </Button>
  ));
