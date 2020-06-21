import roles from '../constants/roles';

const allRoles = Object.keys(roles);

const routes = [
    {
        Login: 'SignUp',
        path: '/sign-up',
        auth: false,
        exact: false
    },
    {
        component: 'Login',
        path: '/login',
        auth: false,
        exact: false
    },
    {
        component: 'Profile',
        path: '/profile',
        auth: true,
        exact: false,
        roles: allRoles
    },
    {
        component: 'AddTodo',
        path: '/create-tasks',
        auth: true,
        exact: false,
        roles: allRoles
    },
    {
        component: 'ModifyStatus',
        path: '/modify-status',
        auth: true,
        exact: false,
        roles: allRoles
    },
    {
        component: 'UserTodos',
        path: '/todo-by-users',
        auth: true,
        exact: false,
        roles: allRoles
    },
    {
        component: 'Todos',
        path: '/',
        auth: true,
        exact: false,
        roles: allRoles
    }
];

export default routes;