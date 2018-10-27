const Home = () => import('@/pages/Home');
const Mine = () => import('@/pages/Mine');
const Mall = () => import('@/pages/Mall');
const Cart = () => import('@/pages/Cart');
const Detail = () => import('@/pages/Detail');

export default [{
  path:'/',
  redirect: '/home'
},{
  path:'/home',
  name:'home',
  title:'首页',
  component:Home,
  isTabbar: true
},{
  path:'/mall',
  name:'mall',
  title:'分类',
  component:Mall,
  isTabbar: true
},{
  path:'/cart',
  name:'cart',
  title:'购物车',
  component:Cart,
  isTabbar: true
},{
  path:'/mine',
  name:'mine',
  title:'我的',
  component:Mine,
  isTabbar: true
},{
  path:'/detail/:id',
  name:'detail',
  title:'详情页',
  component:Detail,
  isTabbar: false
}
]
