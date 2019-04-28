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
      path: '/profile/:userID',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/selectstrand',
      name: 'selectstrand',
      component: () => import('./components/profile/select-strand.vue'),
    },
    {
      path: '/selectgradelevel',
      name: 'selectgradelevel',
      component: () => import('./components/profile/gradelevel.vue'),
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: () => import('./components/password/password.vue'),
    },
    {
      path: '/profile/student-payment/:userID',
      name: 'studentpayment',
      component: () => import('./components/student/student-payment.vue'),
    },
    // payment
    {
      path: '/payment',
      name: 'payment',
      component: () => import('./components/payment/payment.vue'),
    },
    // admin routes protected
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
    },
    {
      path: '/admin/strand',
      name: 'strand',
      component: () => import('./components/admin/strand.vue'),
    },
    {
      path: '/admin/studentlist',
      name: 'studentlist',
      component: () => import('./components/admin/student-list.vue'),
    },
    {
      path: '/admin/checkout/:userID',
      name: 'checkout',
      component: () => import('./components/admin/checkout.vue'),
    },
    // user routes
    {
      path: '/user',
      name: 'user',
      component: () => import('./components/user/user.vue'),
    },


    {
      path: '/jhsgrades',
      name: 'grades',
      component: () => import('./components/student/jhs-grades.vue'),
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   const token = !!localStorage.getItem('token');
//   console.log(token);
//   if (to.fullpath === '/profile') {
//     if (!token) {
//       next('/login');
//     }
//   }
//   if (to.fullPath === '/user') {
//     if (!token) {
//       next('/login');
//     }
//   }
//   if (to.fullPath === '/admin' || from.fullPath === '/admin') {
//     if (!token) {
//       next({ path: '/' });
//     }
//   }
//   next();
// });

export default router;
