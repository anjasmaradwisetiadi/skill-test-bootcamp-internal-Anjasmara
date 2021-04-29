<template>
  <div class="home">
    <dashbord></dashbord>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Dashbord from '../components/Dashbord.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Dashbord
  },
};
</script>
