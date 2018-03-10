const routes = require('next-routes')();

const routesCollection = [
    {
        name: 'index',
        path: '/',
        page: 'index',
    },
];

routesCollection.forEach(({ name, path, page }) => {
    routes.add(name, path, page);
});

module.exports = routes;

