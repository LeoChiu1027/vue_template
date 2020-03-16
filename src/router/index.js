import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from '@/router/routes'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
    base: '/',
    routes: routes['default'],
    mode: 'history'
})

const router = createRouter()

router.onReady(() => {
    console.log('router.onReady', store.state.authUser)
    if(store.state.authUser){
        const authorizedRoutes = routes[store.state.authUser.role]
        router.matcher = new VueRouter({
            base: '/',
            routes: authorizedRoutes,
            mode: 'history'
        }).matcher

        // router.addRoutes(authorizedRoutes)
        // router.options.routes.push(authorizedRoutes)
    }
  })


async function setAuthUser(){
    await store.dispatch('nuxtClientInit')
}

async function logout(){
    await store.dispatch('logout')
}
// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}
    
router.beforeEach(async (to, from, next) => {
    if(to.path == '/logout'){
        await logout()
        return next()
    }
    await setAuthUser()

    if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

    const context = {
        from,
        next,
        router,
        store,
        to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

export default router