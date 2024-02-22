<template>
  <v-container>
    <div class="hello">
      <v-sheet width="300" class="mx-auto text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="Add name"
        ></v-text-field>
        <v-btn :disabled="!firstName" block class="mt-2" @click="join"
          >Join</v-btn
        >
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  components: {},
  data: () => ({
    firstName: "",
    rules: [
      (value) => {
        if (value) return true;

        return "You must enter a your name.";
      },
    ],
  }),
  methods: {
    join() {
      this.$store.dispatch("setName", this.firstName);
      router.push("/game");
    },
  },
});
</script>
