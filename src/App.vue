<template>
  <v-app>
    <v-navigation-drawer :value="true" permanent stateless app>
      <v-btn icon v-for="i in 300" :key="i">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <HeavyTest />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeavyTest from './components/HeavyTest'

export default {
  name: 'App',
  components: {
    HeavyTest
  }
}
</script>
