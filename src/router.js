import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    // profiles
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/selectstrand',
      name: 'selectstrand',
      component: () => import('./components/strand/select-strand.vue'),
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: () => import('./components/password/password.vue'),
    },
    // admin routes protected
    {
      path: '/admin',
      name: 'adim',
      component: () => import('./views/Admin.vue'),
    },
    {
      path: '/admin/strand',
      name: 'strand',
      component: () => import('./components/strand/strand.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch('fetchToken');
  if (to.fullPath === '/profile') {
    if (!store.state.token) {
      next('/login');
    }
  }
  if (to.fullPath === '/user') {
    if (!store.state.token) {
      next('/login');
    }
  }
  if (to.fullPath === '/admin') {
    if (!store.state.token) {
      next('/login');
    }
  }
  next();
});

export default router;
