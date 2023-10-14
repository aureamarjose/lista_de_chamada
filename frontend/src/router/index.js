import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import HomeFooter from '../components/HomeFooter.vue'
import UnitGroup from '../components/UnitGroup.vue'
import GroupPage from '../components/GroupPage.vue'
import RegisterGroup from '../components/RegisterGroup.vue'


const routes = [
  { path: '/startPage', component: StartPage },
  //{ path: '/registrationPage', component: RegistrationPage },
  { path: '/homeFooter', component: HomeFooter },
  {
    path: '/registrationPage',
    name: 'RegistrationPage',
    component: RegistrationPage,
    children: [
      {
        path: '/registerGroup',
        name: 'RegisterGroup',
        component: RegisterGroup,
      },

      {
        path: '/groupPage',
        name: 'GroupPage',
        component: GroupPage,
      },

      {
        path: '/UnitGroup:id',
        name: 'Group',
        component: UnitGroup
      }
    ]
  },

];

// const routerRegister = [
//   {
//     path: '/registrationPage',
//     name: 'RegistrationPage',
//     component: RegistrationPage,
//     children: [
//       {
//         path: '/registerGroup',
//         name: 'RegisterGroup',
//         component: RegisterGroup,
//       },

//       {
//         path: '/groupPage',
//         name: 'GroupPage',
//         component: GroupPage,
//       },

//       {
//         path: '/UnitGroup:id',
//         name: 'Group',
//         component: UnitGroup
//       }
//     ]
//   },

//]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes],
})



export default router
