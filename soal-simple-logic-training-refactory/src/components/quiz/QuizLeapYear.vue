<template>
  <div class="quizSix text-left mt-2">
    <b-button v-b-toggle.collapse-6 variant="primary">LeapYear</b-button>
    <b-collapse id="collapse-6" class="mt-2">
      <b-card>
        <p class="card-text">
          Find the leap year list of ranges between 2 inputs.
        </p>
        <b-button v-b-toggle.collapse-6-inner size="sm">Lihat Program</b-button>
        <b-collapse id="collapse-6-inner" class="mt-2">
          <b-card>
            <!-- pangkat -->
            <div class="row">
              <div class="col-4">
                <b-form-input
                  v-model.number="yearStart"
                  placeholder="masuakan nilai mu"
                ></b-form-input>
                <b-form-input
                  class="mt-2"
                  v-model.number="yearEnd"
                  placeholder="masukan nilai pangkat"
                ></b-form-input>
                <button
                  class="btn btn-primary mt-2"
                  @click.prevent="countPangkat(yearStart, yearEnd)"
                >
                  Hasil
                </button>
              </div>
            </div>
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
      yearStart: null,
      yearEnd: null,
      resultPangkat: null,
    };
  },

  methods: {
    countPangkat(yearStart, yearEnd) {
      for (let year = yearStart; year < yearEnd; year++) {
        if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
          console.log(year);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
