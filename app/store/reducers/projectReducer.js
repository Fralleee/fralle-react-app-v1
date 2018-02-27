import { createReducer } from 'utils/reducer'

import TestProject from 'projects/TestProject'
import TestProjectNoRenderer from 'projects/TestProjectNoRenderer'

// Projects should also include their corresponding images
// linkImage (regular resolution + base64)
// Flickity (all resolutions + base64)
// Content images are loaded from specfic renderer if there is one
// Or they are displayed as a gallery in the default renderer

const games = [TestProject, TestProjectNoRenderer]

const webApps = [
  { category: 'web', title: 'RMDB', subtitle: 'MOVIE / FAN', image: 'https://placeimg.com/480/768/any' },
  { category: 'web', title: 'FODERTORGET', subtitle: 'SHOP / AUCTION', image: 'https://placeimg.com/480/768/any' }
]

const initialState = {
  projects: [...games, ...webApps].map(project => Object.assign({}, project, { id: project.title.replace(/\s/g, '-').toLowerCase() }))
}

export default createReducer(initialState, {})
