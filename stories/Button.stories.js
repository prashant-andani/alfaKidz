import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button/Button';

storiesOf('Button', module)
  .addWithJSX('Primary Button', () => <Button className="btn">Create New</Button>)
  .addWithJSX('Large Button', () => <Button className="btn-large">Click</Button>)
  .addWithJSX('Inverse Button', () => <Button className="btn-inverse">Review & Publish</Button>)
  .addWithJSX('Disabled Button', () => (
    <Button disabled className="btn">
      Review & Publish
    </Button>
  ));
