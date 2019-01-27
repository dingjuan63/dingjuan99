import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')




export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页城市列表页
    {
      path: '/home',
      component: home
    },
    //当前选择城市页
    {
      path: '/city/:cityid',
      component: city
    },
    //所有商铺列表页
    {
      path: '/msite',
      component: msite,
      meta: { keepAlive: true },
    },
    //商铺详情页
    {
      path: '/shop',
      component: shop,
      // children: [{
      //   path: 'foodDetail', //食品详情页
      //   component: foodDetail,
      // }, {
      //   path: 'shopDetail', //商铺详情页
      //   component: shopDetail,
      //   children: [{
      //     path: 'shopSafe', //商铺安全认证页
      //     component: shopSafe,
      //   }, ]
      // }]
    },
    //登录注册页
    {
      path: '/login',
      component: login
    },
    //个人信息页
    {
      path: '/profile',
      component: profile,
      children: [{
        path: 'info', //个人信息详情页
        component: info,
        // children: [{
        //   path: 'setusername',
        //   component: setusername,
        // }]
      }]

      //     {
      //     path: 'address',
      //     component: address,     //编辑地址
      //     children:[{
      //       path:'add',
      //       component:add,
      //       // children:[{
      //       //   path:'addDetail',
      //       //   component:addDetail
      //       // }]
      //     }]
      //   }]
      // },
      //   {
      //     path: 'service', //服务中心
      //     component: service,
      //   },]
    },


  ]
}]
