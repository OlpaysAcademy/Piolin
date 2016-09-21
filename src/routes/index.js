const routes = {
  '/boop': {
    title: 'Boop',
  },
  '/': {
    title: 'Login',
  },
  '/tweets': {
    title: 'Timeline',
    '/create': {
        title: 'New Tweet'
    }
  },
};

export default routes;
