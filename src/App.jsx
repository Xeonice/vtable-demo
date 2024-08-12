import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
import { routes } from "./router";
import Listview from "./components/ListTable.vue";
export default defineComponent({
  setup() {
    const router = useRouter();
    const goto = (path) => {
      router.push({
        path,
      });
    };
    return () => {
      return (
        <>
          <Listview/>
          <div
            style={{
              position: "fixed",
              display: "flex",
              flexDirection: "column",
              zIndex: 1000,
              padding: "12px",
              border: "1px solid black",
              background: "rgba(255, 255,255, 1)",
              right: "10px",
              bottom: "10px",
            }}
          >
            {routes.map((route) => {
              return <a onClick={() => goto(route.path)}> {route.path}</a>;
            })}
          </div>
        </>
      );
    };
  },
});
