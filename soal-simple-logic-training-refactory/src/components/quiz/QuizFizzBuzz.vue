<template>
  <div class="quizTwo mt-2 text-left">
    <b-button v-b-toggle.collapse-2 variant="primary">FizzBuzz</b-button>
    <b-collapse id="collapse-2" class="mt-2">
      <b-card>
        <p class="card-text">make program fizz buzz</p>
        <b-button v-b-toggle.collapse-2-inner size="sm">Hasil </b-button>
        <b-collapse id="collapse-2-inner" class="mt-2">
          <b-card>
            <input type="text" v-model.number="value" />
            <button class="btn btn-primary mt-2" @click.prevent="dataWord()">
              hasil
            </button>
          </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    dataWord() {
      let collectData = [];

      for (let i = 0; i < this.value; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          collectData.push("fizz buzz");
        } else if (i % 3 == 0) {
          collectData.push("fizz");
        } else if (i % 5 == 0) {
          collectData.push("buzz");
        } else {
          collectData.push(i.toString());
        }
      }
      console.log(collectData);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
