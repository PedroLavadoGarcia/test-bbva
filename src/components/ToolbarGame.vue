<template>
  <v-toolbar color="primary" class="d-flex">
    <v-btn icon>
      <v-icon size="24">mdi-account</v-icon>
    </v-btn>

    <v-toolbar-title class="text-sm-left mx-0">{{ name }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-responsive class="mx-auto" max-width="150">
      <v-combobox v-model="level" label="Level" :items="items"></v-combobox>
    </v-responsive>
  </v-toolbar>
</template>

<script>
import { constant } from "@/common/constant";
export default {
  name: "ToolbarGame",
  props: {
    msg: String,
  },
  computed: {
    name() {
      return this.$store.state.name ? this.$store.state.name : "Nombre";
    },
  },
  data: () => ({
    level: constant.LEVEL_GAME.LOW.TEXT,
    items: constant.LIST_LEVELS,
  }),
  watch: {
    level() {
      this.$store.dispatch("setLevel", this.level);
    },
  },
};
</script>
