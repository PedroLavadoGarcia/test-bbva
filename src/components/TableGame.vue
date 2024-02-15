<template>
  <div class="">
    <div>{{ timeLeft }} seconds left</div>
    <div class="text-h4 pb-6">{{ titleGame }}</div>
    <div class="d-flex flex-wrap">
      <div
        class="celda text-h3"
        :class="clickItem === number ? validateTest : ''"
        v-for="(number, index) in list"
        :key="index"
        @click="clickValue(number)"
      >
        {{ viewMode || clickItem === number ? number : "?" }}
      </div>
    </div>
    <div v-if="clickItem" class="py-2">
      <v-btn elevation="2" color="info" @click="initGame()">Play again</v-btn>
    </div>
  </div>
</template>

<script>
import { constant } from "@/common/constant";
import shuffle from "@/common/functions";
export default {
  name: "TableGame",
  computed: {
    titleGame() {
      return this.viewMode
        ? "Memorize the cards"
        : "Where is the number " + this.numberSearch + "?";
    },
    validateTest() {
      return this.clickItem === this.numberSearch ? "bg-green" : "bg-red";
    },
    name() {
      return this.$store.state.name ? this.$store.state.name : "Nombre";
    },
    time() {
      if (this.$store.state.level === constant.HIGH_TEXT) {
        return 2000;
      } else if (this.$store.state.level === constant.MEDIUM_TEXT) {
        return 5000;
      } else {
        return 10000;
      }
    },
  },
  data: () => ({
    timeLeft: null,
    clickItem: null,
    numberSearch: null,
    viewMode: true,
    list: [],
  }),
  watch: {
    time() {
      this.initGame();
    },
  },
  mounted() {
    this.list = this.$store.state.list;
    this.initGame();
  },
  methods: {
    clickValue(number) {
      if (!this.clickItem && !this.viewMode) {
        this.clickItem = number;
        if (this.clickItem === this.numberSearch) {
          this.$emit("add");
        }
      }
    },
    initGame() {
      this.stopAllTimeout();
      this.timeLeft = this.time / 1000;
      this.viewMode = true;
      this.clickItem = null;
      this.list = shuffle(this.list);
      setTimeout(
        () => (
          (this.viewMode = false),
          (this.numberSearch =
            this.list[Math.floor(Math.random() * this.list.length)])
        ),
        this.time
      );
      this.timeLeftDown();
    },
    timeLeftDown() {
      if (this.timeLeft) {
        setTimeout(() => (this.timeLeft--, this.timeLeftDown()), 1000);
      }
    },
    stopAllTimeout() {
      var highestTimeoutId = setTimeout(";");
      for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
    },
  },
};
</script>

<style scoped>
.celda {
  cursor: pointer;
  border: 2px solid;
  padding: 8px;
  margin: 8px;
  flex: 1 1 30%;
}
</style>
