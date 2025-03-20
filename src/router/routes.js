const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/HomeView.vue') },
      { path: 'list', component: () => import('pages/ListView.vue') },
      { path: 'detail/:id', component: () => import('pages/DetailView.vue'), props: true }
    ]
  },
]

export default routes
