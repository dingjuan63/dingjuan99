import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/children/setusername')), 'setusername')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
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
    //特色商铺列表页
    {
      path: '/food',
      component: food
    },
    //所有商铺列表页
    {
      path: '/msite',
      component: msite,
      meta: { keepAlive: true },
    },
    //搜索页
    {
      path: '/search/:geohash',
      component: search
    },
    //商铺详情页
    {
      path: '/shop',
      component: shop,
      children: [{
        path: 'foodDetail', //食品详情页
        component: foodDetail,
      },
        {
        path: 'shopDetail', //商铺详情页
        component: shopDetail,
        children: [{
          path: 'shopSafe', //商铺安全认证页
          component: shopSafe,
        }, ]
      }
      ]
    },
    //登录注册页
    {
      path: '/login',
      component: login
    },
    {
      path: '/profile',
      component: profile,
      children: [{
        path: 'info', //个人信息详情页
        component: info,
        children: [{
          path: 'setusername',
          component: setusername,
        },{
          path: 'address',
          component: address,     //编辑地址
        }]
      }]
    },
    //订单列表页
    {
      path: '/order',
      component: order,
      // children: [{
      //   path: 'orderDetail', //订单详情页
      //   component: orderDetail,
      // }, ]
    },

  ]
}]
