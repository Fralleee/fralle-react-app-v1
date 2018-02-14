/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeIcon from 'atoms/CodeIcon/CodeIcon'
import { HexGrid, HexGridRow, HexGridItem } from 'organisms/HexGrid'

storiesOf('HexGrid', module).add('With CodeIcon', () => (
  <HexGrid>
    <HexGridRow>
      <HexGridItem>
        <CodeIcon code='javascript' />
      </HexGridItem>
    </HexGridRow>
    <HexGridRow>
      <HexGridItem>
        <CodeIcon code='azure' />
      </HexGridItem>
      <HexGridItem>
        <CodeIcon code='node' />
      </HexGridItem>
    </HexGridRow>
    <HexGridRow>
      <HexGridItem>
        <CodeIcon code='unity' />
      </HexGridItem>
      <HexGridItem>
        <CodeIcon code='webpack' />
      </HexGridItem>
      <HexGridItem>
        <CodeIcon code='react' />
      </HexGridItem>
    </HexGridRow>
    <HexGridRow>
      <HexGridItem>
        <CodeIcon code='redux' />
      </HexGridItem>
      <HexGridItem>
        <CodeIcon code='css' />
      </HexGridItem>
    </HexGridRow>
    <HexGridRow>
      <HexGridItem>
        <CodeIcon code='sql' />
      </HexGridItem>
    </HexGridRow>
  </HexGrid>
))
