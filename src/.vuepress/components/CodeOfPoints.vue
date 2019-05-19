<template>
  <vuetable ref="vuetable" v-if="table.length" :api-mode="false" :data="table" :fields="fields"></vuetable>
</template>

<script>
import csv from "csvtojson";
import Vuetable from "vuetable-2";

export default {
  name: "CodeOfPoints",
  components: {
    Vuetable
  },
  methods: {
    async getCode() {
      const response = await fetch(
        "https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv"
      );
      const text = await response.text();
      const table = await csv({
        ignoreColumns: /(id|index)/
      }).fromString(text);
      this.table = table;
    }
  },
  data() {
    return {
      table: [],
      fields: [
        {
          name: "app",
          title: "Apparatus"
        },
        {
          name: "eg",
          title: "EG"
        },
        {
          name: "value",
          title: "Value"
        },
        {
          name: "description",
          title: "Description"
        }
      ]
    };
  },
  created() {
    this.getCode();
  }
};
</script>
