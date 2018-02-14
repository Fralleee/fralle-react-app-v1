import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Title from 'atoms/Title/Title'
import Button from 'atoms/Button/Button'
import Tag from 'atoms/Tag/Tag'
import TagList from 'molecules/TagList/TagList'
import TextContainer from 'atoms/TextContainer/TextContainer'
import './RecentProjectItem.scss'

class RecentProjectItem extends Component {
  render() {
    const { className, style, img, name, type } = this.props
    return (
      <div data-index={this.props['data-index']} style={style} className={className} tabIndex='-1'>
        <div className='recentProject' style={{ backgroundImage: `url(${img})` }}>
          <div className='recentProjectInfo'>
            <h2>{name}</h2>
            {type === 'test' && type}
            <TagList>
              <Tag tag='unity' />
              <Tag tag='csharp' />
              <Tag tag='net' />
              <Tag tag='vs' />
              <Tag tag='blender' />
            </TagList>

            <TextContainer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <em>Fusce</em> accumsan luctus ultrices. Integer lorem urna, elementum ac justo laoreet, euismod pulvinar
              tortor. Fusce nisl nibh, ullamcorper sed erat a, porta posuere purus. Etiam hendrerit tristique odio, at vehicula quam molestie sit amet. Quisque enim libero,
              vestibulum vel vulputate vitae, efficitur vel nulla. Nunc quam est, ultrices ac egestas eu, volutpat ut libero. Pellentesque quis laoreet dui.
            </TextContainer>

            <Button primary style={{ marginLeft: '1rem' }}>
              View project
            </Button>
            <Button secondary>Browse projects</Button>
          </div>
        </div>
      </div>
    )
  }
}

RecentProjectItem.propTypes = {
  'data-index': PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
}

export default RecentProjectItem
