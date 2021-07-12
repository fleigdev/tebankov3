import { createRouter, createWebHistory } from "vue-router";
import Public from "../public/Public.vue";
import Solicitud from "../public/views/Solicitud.vue";
import Validacion from "../public/views/Validacion.vue";
import Landing from "../public/views/Landing.vue";
import Aceptado from "../public/views/Aceptado.vue";


const routes = [
  {
    path: '/',
    component: Public,
    
    children: [
      {path: '', component: Landing },
      {path: '/solicitud', component: Solicitud },
      {path: '/validacion', component: Validacion},
      {path: '/aceptado', component: Aceptado},
      
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
},
});

export default router;
