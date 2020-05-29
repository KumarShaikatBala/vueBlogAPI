

require('./bootstrap');

window.Vue = require('vue');
/*vuerouter:*/
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {routes} from "./routes";

const router = new VueRouter({
    mode:'history',
  /*  linkActiveClass:'active',*/
    routes // short for `routes: routes`
});

/*Vuex*/
import Vuex from 'vuex'

Vue.use(Vuex)
import data from './index'
const store = new Vuex.Store(
    data
)



/*vform:*/
import Vue from 'vue'
window.Form=Form;
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);


/*Sweet Alert Package:*/
import Swal from 'sweetalert2'
window.Swal = require('sweetalert2');
/*Sweet Alert Toaster:*/
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});
window.Toast=Toast;



/*Moment js for Date time Format:*/
import moment from 'moment';
Vue.filter('myDate',function (created) {
    return moment(created).format('MMMM Do YYYY, h:mm:ss a');
});
Vue.component('footer-component', require('./components/admin/partials/FooterComponent.vue').default);
Vue.component('master-component', require('./components/admin/MasterComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store
});
