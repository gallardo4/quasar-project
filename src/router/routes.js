const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomeView.vue') },
      { path: 'list', component: () => import('pages/ListView.vue') },
      { path: 'detail/:id', name: 'CharacterDetail', component: () => import('pages/DetailView.vue'), props: true }
    ]
  },
]

export default routes
