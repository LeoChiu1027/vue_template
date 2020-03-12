export default function auth({ next, router, store }) {
    if (!store.state.authUser) {
        console.log('no jwt');
      return router.push('/expire', () => {});
    }
    return next();
  }