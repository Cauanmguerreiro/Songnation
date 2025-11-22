const routes = [
  {
    path: '/',
    component: () => import('layouts/LayoutSemLogin.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // Removido: { path: '/login', component: () => import('pages/LoginPage.vue') },
    ],
  },
  {
    path: '/logged-in',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Example authenticated page
      // Add other authenticated routes here
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  
]

export default routes
