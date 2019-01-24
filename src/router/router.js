import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')

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
        //登录注册页
        {
          path: '/login',
          component: login
        },
      //个人信息页
      {
        path: '/profile',
        component: profile,
        // children: [{
        //   path: 'info', //个人信息详情页
        //   component: info,
        //   children: [{
        //     path: 'setusername',
        //     component: setusername,
        //   },{
        //     path: 'address',
        //     component: address,     //编辑地址
        //     children:[{
        //       path:'add',
        //       component:add,
        //       children:[{
        //         path:'addDetail',
        //         component:addDetail
        //       }]
        //     }]
        //   }]
        },
    ]
}]
