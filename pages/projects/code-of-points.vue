<template>
  <div class="container mx-auto my-6">
    <client-only>
      <vue-good-table :columns="columns" :rows="rows" />
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import csv from "csvtojson";

export default defineComponent({
  async asyncData() {
    const response = await fetch(
      "https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv"
    );
    const text = await response.text();
    const rows = await csv({
      ignoreColumns: /(id|index)/,
    }).fromString(text);
    return {
      rows,
    };
  },
  setup() {
    const columns = ref([
      {
        field: "app",
        label: "Apparatus",
      },
      {
        field: "eg",
        label: "EG",
      },
      {
        field: "value",
        label: "Value",
      },
      {
        field: "description",
        label: "Description",
      },
    ]);
    return { columns };
  },
});
</script>
