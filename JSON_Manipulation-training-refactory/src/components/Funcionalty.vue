<template>
  <div class="funcionallty mt-4">
    <div class="row">
      <div class="col">
        <p>Click the button to find out the answer !!!</p>
        <div v-for="item in 5" :key="item" class="d-inline mt-2">
          <button
            type="button"
            class="btn btn-primary mr-3 d-inline"
            @click.prevent="buttonFunction(item)"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "quizOne",
      "quizTwo",
      "quizThree",
      "quizFour",
      "quizFive",
      "zeroValue",
    ]),

    buttonFunction(data) {
      if (this.$store.state.resultFind.length > 1) {
        this.zeroValue();
      }
      switch (data) {
        case 1:
          this.quizOne();
          break;
        case 2: {
          this.quizTwo();
          break;
        }
        case 3: {
          this.quizThree();
          break;
        }
        case 4: {
          this.quizFour();
          break;
        }
        case 5: {
          this.quizFive();
          break;
        }
        default:
          this.zeroValue();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
