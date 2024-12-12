import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "MikuNyaBot",
  description: "A Doc for QQBot",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    search: {
      provider: 'local'
    },
    footer: {
            message: '葱喵Bot立绘，logo由<a href="https://space.bilibili.com/501085490">神坂神坂</a>提供',
                  copyright: 'Copyright © 2020-2024 葱喵Bot 由天音铃制作',
    },         
    nav: [
      { text: '主页', link: '/' },
      { text: 'Bot使用帮助', link: '/BotHelp' },
      { text: '用户协议', link: '/terms' },
      { text: '关于', link: '/about' },
      { text: 'QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=DwSI9knjUpdYhNOStiCfsc400ZuYZ3gZ&authKey=g1jS4ol3PGY%2BQPDy4pVr3FXJPKPvvyM8Gosv197tr%2F4jQmrJzQDwQ7Sv1WwSNGQb&noverify=0&group_code=917766863' }
    ],

    sidebar: [
      {
        text: '葱喵Bot相关帮助',
        items: [
      { text: 'Bot使用帮助', link: '/BotHelp' },
      { text: '用户协议', link: '/terms' },
      { text: '关于', link: '/about'},
      { text: 'maimai上传帮助', link: '/maiupdate' },
      { text: 'arcaea上传帮助', link: '/ab30'}
        ]
      },
      {
        text: '第三方Bot相关帮助',
        items: [
          { text: 'ChieriBot帮助', link: '/thirdparty/Chieri-Bot'},
          { text: 'HarukiBot帮助', link: '/thirdparty/Haruki-Bot'},
          { text: 'TsuguBot帮助', link: '/thirdparty/Tsugu-Bot'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YoisakiKnd' }
    ]
  }
})
