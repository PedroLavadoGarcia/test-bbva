<template>
  <v-container>
    <div class="hello">
      <v-sheet width="300" class="mx-auto text-center">
        <v-icon
          class="my-2"
          icon="mdi-nintendo-game-boy"
          size="150"
          color="blue-darken-4"
        />
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="Add name"
        ></v-text-field>
        <v-btn
          id="joinButton"
          :disabled="!firstName"
          block
          class="mt-2"
          @click="join()"
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
      console.log("entro");
      this.$store.dispatch("setName", this.firstName);
      router.push("/game");
    },
  },
});
</script>
