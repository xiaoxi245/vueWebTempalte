const mycommonRouter = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/user/list')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/views/user/edit')
  }
]

export default mycommonRouter
