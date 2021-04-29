<template>
  <section class="Main_Template">
    <div class="container">
      <question></question>
      <funcionalty></funcionalty>
      <result></result>
    </div>
  </section>
</template>
<script>
import Funcionalty from "./Funcionalty.vue";
import Question from "./Question.vue";
import Result from "./Result.vue";

export default {
  components: {
    Question,
    Funcionalty,
    Result,
  },
};
</script>

<style lang="scss" scoped>
</style>
