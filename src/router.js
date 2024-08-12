import Listview from "./components/ListTable.vue";
import { CustomComponent } from "./defineComponent";

export const routes = [
  {
    path: "/",
    component: Listview,
  },
  {
    path: "defineComponent",
    component: CustomComponent,
  },
];
