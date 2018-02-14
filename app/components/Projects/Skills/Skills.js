import React, { Component } from 'react'
import CodeIcon from 'atoms/CodeIcon/CodeIcon'
import { HexGrid, HexGridRow, HexGridItem } from 'molecules/HexGrid'
import './Skills.scss'

class Skills extends Component {
  render() {
    return (
      <section className='skillsSection'>
        <div style={{ margin: '0 auto' }}>
          <HexGrid>
            <HexGridRow>
              <HexGridItem>
                <CodeIcon code='react' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='azure' />
              </HexGridItem>
            </HexGridRow>

            <HexGridRow>
              <HexGridItem>
                <CodeIcon code='node' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='sql' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='net' />
              </HexGridItem>
            </HexGridRow>

            <HexGridRow>
              <HexGridItem>
                <CodeIcon code='vscode' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='javascript' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='csharp' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='vs' />
              </HexGridItem>
            </HexGridRow>

            <HexGridRow>
              <HexGridItem>
                <CodeIcon code='redux' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='css' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='unity' />
              </HexGridItem>
            </HexGridRow>

            <HexGridRow>
              <HexGridItem>
                <CodeIcon code='webpack' />
              </HexGridItem>
              <HexGridItem>
                <CodeIcon code='blender' />
              </HexGridItem>
            </HexGridRow>
          </HexGrid>
        </div>
      </section>
    )
  }
}

export default Skills
