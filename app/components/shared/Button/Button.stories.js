/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from 'atoms/Button/Button'

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with other text', () => <Button onClick={action('clicked')}>Hello yes</Button>)
  .add('with rolle pizzazz', () => <Button onClick={action('clicked')}>#yolo</Button>)
