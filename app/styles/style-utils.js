import { css } from 'styled-components'

// colors
export const color = {
  // base
  bg: '#f6f8fa',
  fontColor: '#464d5f',
  fontColorLight: '#a8acb9',
  topMenuTextColor: '#fff',

  // menu
  leftMenuBg: '#1f2637',
  leftMenuText: '#6c7587',
  leftMenuIcon: '#5e6b8e',
  rightMenuUserInitialsBg: '#ba93eb',
  rightMenuUserInitialsText: '#fff',

  // chart colors
  green: '#7cda75', // open
  orange: '#f8b968', // past due
  red: '#ff5a66', // reminder
  turquoise: '#2b96c5',
  purple: '#a575d7',
  darkgreen: '#389431',
  darkblue: '#07638b',
  grey: '#d3d3d3', // always use this as the last color in the chart

  // asitis colors
  asitisRed: '#d82e3b',
  asitisGrey: '#343434',
  asitisViolet: '#664888',
  asitisVioletTint: '#7B6097',
  asitisBlue: '#2b96c5',
  asitisBlueTint: '#4eadd0',
  asitisGreen: '#34ad80',
  asitisGreenTint: '#5db89a',
  asitisOrange: '#e69558',
  asitisOrangeTint: '#f6be60',

  // astis
  astisBlue: '#276ef7',
  astisBubble: '#4880f8',

  // ?
  borderGrey: '#dfdfdf', // used by filterBtn on Ledger View
  tableBorderGrey: '#eceeef' // used by tables
}

export function truncate() {
  return `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

export function placeholder(color) {
  return `
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${color};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${color};
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${color};
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${color};
  }
  `
}

// media templates based on bootstrap 4
const sizes = {
  giant: 1199, // (lg)
  desktop: 991, // (md)
  tablet: 767, // (sm)
  phone: 575 // (xs) iphone 6 = 375, iphone 5 = 320
}
// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
