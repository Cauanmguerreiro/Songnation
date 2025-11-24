const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      },

      {
        path: 'pesquisar',
        name: 'pesquisar',
        component: () => import('pages/SearchPage.vue')
      },

      {
        path: 'generos',
        name: 'generos',
        component: () => import('pages/GenreSelectionPage.vue')
      },

      {
        path: 'compositores/:genreSlug',
        name: 'compositores',
        component: () => import('pages/CompositoresPage.vue')
      },

      {
        path: 'criar-composicao',
        name: 'criar-composicao',
        component: () => import('pages/CriarComposicao.vue')
      },

      {
        path: '/perfil/:id',
        name: 'perfil',
        component: () => import('pages/Perfil.vue')
      },
    ],
  },

  // 404
  {
    path: '/:catchAll(.*)*',
    name: 'erro-404',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
