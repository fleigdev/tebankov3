import { createRouter, createWebHistory } from "vue-router";
import Public from "../public/Public.vue";
import Solicitud from "../public/views/Solicitud.vue";
import Landing from "../public/views/Landing.vue";


const routes = [
  {
    path: '/',
    component: Public,
    
    children: [
      {path: '', component: Landing},
      {path: '/solicitud', component: Solicitud},
      
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
