import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import VueResource from 'vue-resource'
import index from '@/components/index.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import fj from '@/components/fj.vue'
import ss from '@/components/ss.vue'
import tj from '@/components/tj.vue'
import cs from '@/components/cs.vue'
import UserMessage from '@/components/UserMessage.vue'
Vue.use(Router)
Vue.use(VueResource)
/*配置路由*/
export default new Router({
	routes: [{
			path: '/index',
			component: index
		},
		{
			path: '/cs',
			component: cs
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/register',
			component: register
		},
		{
			path: '/fj',
			component: fj
		},
		{
			path: '/ss',
			component: ss
		},
		{
			path: '/tj',
			component: tj
		},
		{
			path:'/UserMessage',
			component:UserMessage
		}
	]
})
