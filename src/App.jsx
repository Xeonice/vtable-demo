import { defineComponent } from "vue";
import Listview from "./components/ListTable.vue";
// TODO: 这段 CSS 有问题
import "./lego.css";
export default defineComponent({
  setup() {
    return () => {
      return <Listview />;
    };
  },
});
