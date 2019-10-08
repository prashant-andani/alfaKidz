import React from 'react';
import { storiesOf } from '@storybook/react';
import LearningCard from '../src/components/LearningCard/LearningCard';

storiesOf('LearningCard', module)
  .addWithJSX('Primary LearningCard', () => <LearningCard className="btn">Create New</LearningCard>)
  .addWithJSX('Disabled LearningCard', () => (
    <LearningCard disabled className="btn" label="Example LearningCard">
      Review & Publish
    </LearningCard>
  ));
