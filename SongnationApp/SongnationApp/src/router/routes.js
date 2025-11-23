const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'), // Layout wrapper que decide qual usar
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/criar-composicao',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CriarComposicao.vue') },
    ],
  }
]

export default routes
