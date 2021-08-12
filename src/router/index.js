import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/tenFunctions'),
  },
  {
    path: '/detail',
    component: () => import('@/views/companyDetail')
  },
  {
    path: '/detail2',
    component: () => import('@/views/detail2')
  },
  {
    path: '/detail3',
    component: () => import('@/views/detail3')
  },
  {
    path: '/test',
    component: () => import('@/views/test')
  }
]

const router = new VueRouter({
  routes,
});

export default router;
