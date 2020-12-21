import Vue from "vue";

declare module "vue/types/vue" {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    $isAMP: boolean;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    amp?: boolean | "hybrid" | "only";
    ampLayout?: string | (() => string);
  }
}
