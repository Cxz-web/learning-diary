module.exports = {
  evergreen: true,
  title: "学习笔记",
  description: "保持学习",
  dest: './dist',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: "上一次更新",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'go', link: '/go/' },
      { text: 'External', link: 'https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F' },
    ],
    sidebar: {
      '/go/': [
        '',
        'one'
      ]
    }
  },
}