<script setup>
import RegistroParteUno from '../components/RegistroParteUno.vue'
import RegistroParteDos from '../components/RegistroParteDos.vue'
import RegistroParteTres from '../components/RegistroParteTres.vue'
</script>

<template>
  <section class="columns mt-6">
  	<div class="column"></div>
  <div id="steps">
    <div>
      <Wizard
        squared-tabs
        navigable-tabs
        scrollable-tabs
        :nextButton="{
          text: 'next',
          icon: 'back',
          hideIcon: false, // default false but selected for sample
          hideText: false, // default false but selected for sample
        }"
        :custom-tabs="[
          {
            title: 'paso 1',
          },
          {
            title: 'paso 2',
          },
          {
            title: 'paso 3',
          },
          {
            title: 'paso 4',
          },
        ]"
        :beforeChange="onTabBeforeChange"
        @change="onChangeCurrentTab"
        @complete:wizard="wizardCompleted"
      >
        <h5 v-if="currentTabIndex === 0"><RegistroParteUno /></h5>
        <h5 v-if="currentTabIndex === 1"><RegistroParteDos /></h5>
        <h5 v-if="currentTabIndex === 2"><RegistroParteTres /></h5>
        <h5 v-if="currentTabIndex === 3">algo 3</h5>
      </Wizard>
    </div>
  </div>
  	<div class="column"></div>

  </section>
</template>


<script>

import 'form-wizard-vue3/dist/form-wizard-vue3.css';

import Wizard from 'form-wizard-vue3';

export default {
  name: 'steps',
  components: {
    Wizard,
  },
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    onChangeCurrentTab(index, oldIndex) {
      console.log(index, oldIndex);
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      if (this.currentTabIndex === 0) {
        console.log('First Tab');
      }
      console.log('All Tabs');
    },
    wizardCompleted() {
      console.log('Wizard Completed');
    },
  },
};
</script>

<style>
#steps {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
