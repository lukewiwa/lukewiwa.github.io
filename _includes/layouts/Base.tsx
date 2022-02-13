import React from "react";
import NavBar from "../../_components/NavBar.tsx";

interface BaseProps {
  title: string;
}

export default (
  { children, title = "Wiwa" }: React.PropsWithChildren<BaseProps>,
) => (
  <html lang="en">
    <head>
      <title>{title}</title>
    </head>
    <body>
      <div className="text-gray-700 font-normal">
        <NavBar />
        {children}
      </div>
    </body>
  </html>
);

{
  /* <script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  head: {},
  setup() {
    useMeta({ title: "Wiwa" });
  },
});
</script> */
}
