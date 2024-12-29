import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

import Component404 from './404'

const Title = () => {

  return (<div style={{ fontSize: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <img style={{ borderRadius: 4 }} width={20} height={20} src='http://www.wangxianqiao.cn/img/avatar/snail.png' alt='' />
    <span style={{ marginLeft: 5 }}>Snail Components</span>
  </div>);
}

export default createTheme({
  logo: <Title />,
  topNavs: [
    {
      label: '概述',
      path: '/',
      activeIfMatch: {
        // match all first-level paths
        path: '/:foo',
        end: true,
      },
    },
    {
      label: '组件',
      path: '/components/SnailDraggable',
      activeIfMatch: '/components',
    },
    {
      label: 'Vite',
      href: 'https://github.com/vitejs/vite'
    }
  ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          demos: {
            label: 'Demos (dev only)',
            order: -1,
          },
          general: {
            label: 'General',
            order: 1,
          },
          'data-display': {
            label: 'Data Display',
            order: 2,
          },
        },
      },
    })
  },
  Component404,
})
