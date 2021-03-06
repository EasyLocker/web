import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useAuthStore} from "@/stores/auth"
import LockersView from '../views/LockersView.vue'
import CreateLockerView from '../views/CreateLockerView.vue'
import LockersManagementView from '../views/LockersManagementView.vue'
import {useToast} from "bootstrap-vue-3";


function redirect(next: any, path: any) {
    next({
        path: path,
        replace: true
    })
}

function beforeEnter(to: any, from: any, next: any) {
    const auth = useAuthStore();
    if (!auth.isLogged) {
        redirect(next, '/login')
    } else {
        next()
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            beforeEnter
        },
        {
            path: '/lockers',
            name: 'lockers',
            component: LockersView,
            beforeEnter
        },
        {
            path: '/register',
            name: 'register',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/RegisterView.vue'),
            beforeEnter(to, from, next) {
                const auth = useAuthStore();
                if (!auth.isLogged) {
                    next()
                } else {
                    redirect(next, '/')
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/LoginView.vue'),
            beforeEnter(to, from, next) {
                const auth = useAuthStore();
                if (!auth.isLogged) {
                    next()
                } else {
                    redirect(next, '/')
                }
            }
        },
        {
            path: '/createLocker',
            name: 'createLocker',
            component: CreateLockerView,
            beforeEnter
        },
        {
            path: '/createLocker/:id',
            name: 'editLocker',
            component: CreateLockerView,
            beforeEnter
        },
        {
            path: '/lockersManagement',
            name: 'lockersManagement',
            component: LockersManagementView,
            beforeEnter(to, from, next) {
                const auth = useAuthStore();
                if (!auth.isLogged) {
                    redirect(next, '/login');
                } else if(!auth.isAdmin){
                    // const toast = useToast();
                    // toast?.warning({
                    //     title: 'Permission denied'
                    // });
                    alert("Permission denied");
                    redirect(next, '/');
                }else {
                    next();
                }
            }
        }

    ]
})

export default router
