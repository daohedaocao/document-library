
module.exports = {
  title: '个人文档',
  description: '帅气的文档',
  footer: '帅气的',
  // host: '0.0.0.0',
  // port: 8080,
  // 开发
  // base: '/',
  // 生产
  base: './',
  // evergreen: true,
  head: [
    ['link', { rel: 'icon', href: './logo.jpg' }]
  ],
  // 导航栏
  themeConfig: {
    logo: './logo.jpg',
    nav: require("./nav.js"),
    search: true,
    searchMaxSuggestions: 15,
    // displayAllHeaders: true,
    // 侧边
    // sidebar: 'auto',
    sidebar: require("./sidebar.js"),
    // sidebar: false,
    // '/zh/': {
    //   sidebar: 'auto'
    // },
    // 侧边是否可关闭
    // collapsable: false,
    // 显示几级标题
    sidebarDepth: 4,
  },

}
