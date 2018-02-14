/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeIcon from 'atoms/CodeIcon/CodeIcon'

storiesOf('CodeIcon', module)
  .add('Azure', () => <CodeIcon style={{ width: 100 }} code='azure' />)
  .add('C#', () => <CodeIcon style={{ width: 100 }} code='csharp' />)
  .add('CSS', () => <CodeIcon style={{ width: 100 }} code='css' />)
  .add('Javascript', () => <CodeIcon style={{ width: 100 }} code='javascript' />)
  .add('NodeJS', () => <CodeIcon style={{ width: 100 }} code='node' />)
  .add('React', () => <CodeIcon style={{ width: 100 }} code='react' />)
  .add('Redux', () => <CodeIcon style={{ width: 100 }} code='redux' />)
  .add('SQL', () => <CodeIcon style={{ width: 100 }} code='sql' />)
  .add('Unity', () => <CodeIcon style={{ width: 100 }} code='unity' />)
  .add('Webpack', () => <CodeIcon style={{ width: 100 }} code='webpack' />)
