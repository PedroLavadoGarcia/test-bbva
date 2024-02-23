<template>
  <div class="text-center">
    <div>{{ timeLeft }} seconds left</div>
    <div class="text-h4 pb-6">{{ titleGame }}</div>
    <div class="d-flex flex-wrap">
      <div
        class="celda text-h3"
        :class="clickItems.includes(number) ? validateTest(number) : ''"
        v-for="(number, index) in list"
        :key="index"
        @click="clickValue(number)"
      >
        {{ viewMode || clickItems.includes(number) ? number : "?" }}
      </div>
    </div>
    <div v-if="clickItems.length === 3" class="py-2">
      <v-btn elevation="2" color="info" @click="initGame()">Play again</v-btn>
    </div>
  </div>
</template>

<script>
import { constant } from "@/common/constant";
import {
  shuffle,
  stopAllTimeout,
  vibrate,
  randomElements,
} from "@/common/functions";
export default {
  name: "TableGame",
  data: () => ({
    timeLeft: null,
    clickItems: [],
    numbersSearch: [],
    viewMode: true,
    list: [],
  }),
  computed: {
    titleGame() {
      return this.viewMode
        ? "Memorize the cards"
        : `Where is the numbers ${this.numbersSearch}?`;
    },
    name() {
      return this.$store.state.name ? this.$store.state.name : "Nombre";
    },
    time() {
      if (this.$store.state.level === constant.HIGH_TEXT) {
        return constant.TIME_HIGH_LEVEL;
      } else if (this.$store.state.level === constant.MEDIUM_TEXT) {
        return constant.TIME_MEDIUM_LEVEL;
      }
      return constant.TIME_LOW_LEVEL;
    },
  },
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
      if (this.clickItems.length < 3 && !this.viewMode) {
        this.clickItems.push(number);
        if (this.numbersSearch.includes(number)) {
          this.$emit("add");
        } else {
          vibrate();
        }
      }
    },
    initGame() {
      stopAllTimeout();
      this.timeLeft = this.time / constant.SECOND;
      this.viewMode = true;
      this.clickItems = [];
      this.list = shuffle(this.list);
      setTimeout(
        () => (
          (this.viewMode = false),
          (this.numbersSearch = randomElements(this.list, 3))
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
    validateTest(number) {
      return this.numbersSearch.includes(number) ? "bg-green" : "bg-red";
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
