import roles from '../../../constants/roles';

const allRoles = Object.keys(roles);

const navItems = [
    {
        route: '/',
        title: 'Todos',
        exact: true,
        role: allRoles,
        classes: []
    },
    {
        route: '/create-tasks',
        title: 'Create Tasks',
        exact: true,
        role: allRoles,
        classes: []
    },
    {
        route: '/modify-status',
        title: 'Modify Status',
        exact: true,
        role: allRoles,
        classes: []
    },
    {
        route: '/todo-by-users',
        title: 'Todo By Users',
        exact: true,
        role: [roles.ADMIN],
        classes: []
    }
];

function getNav(userRole) {
    if (!userRole) return [];
    
    let items = navItems.map(nav => {
        if (!nav.role.includes(userRole)) return false;

        return nav;
    })
    .filter(Boolean);

    return items;
}

export default getNav;