import dashboard from './components/admin/DashboardComponent.vue';
import category from './components/admin/category/CategoryComponent.vue';
import categories from './components/admin/category/CategoriesComponent.vue';
import categoryShow from './components/admin/category/CategoryShowComponent.vue';
import categoryEdit from './components/admin/category/CategoryEditComponent.vue';
export const routes = [
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/categories',
        component: categories
    },
    {
        path: '/category-view',
        component: categoryShow
    },
    {
        path: '/category-edit',
        component: categoryEdit
    }

]
