import Member from '@/pages/member'

const authRoutes = [
  {
    path: 'member',
    component: Member
} ]


export default function auth({ next, router, store }) {
    console.log('auth',store.state.authUser)
    if (!store.state.authUser) {
        console.log('no jwt');
      return router.push('/login', () => {});
    }
    return next();
  }