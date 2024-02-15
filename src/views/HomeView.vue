<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="Add name"
        ></v-text-field>
        <v-btn
          type="submit"
          :disabled="!firstName"
          block
          class="mt-2"
          @click="join"
          >Join</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "HomeView",
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
};
</script>
