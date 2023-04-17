<template>
  <div id="app">

<!--    Heading of the page can go here, could also be blank-->
    <h1>Would Your Rather?!</h1>

<!--    Generated cvontent from the WouldYouRather component, using the - syntax allows a clearer
understanding of code and there are no - based html tags-->
    <would-you-rather v-bind:question="wyrQuestion"
    v-bind:answer1="wyrAnswer1" v-bind:answer2="wyrAnswer2"
    v-on:answer-changed="selectedAnswer">
<!--      V-bind ties the data for the radio buttons to the
component allowing me to generate data -->
    </would-you-rather>

    <p id="message">{{userSelectionMessage}}</p>
  </div>
</template>

<script>
// Import the vue components you require
import WouldYouRather from './components/WouldYourRather.vue'

// Export the vue component to the div id above
export default {
  // Div id
  name: 'App',
  // Vue component
  components: {
    WouldYouRather
  },
  //The data used by the vue components in the app div above
  data () {
    //This parent data is used in the child vue component WouldYouRather.vue
    return{
      wyrQuestion: "Would you rather be a cyborg or a robot?",
      wyrAnswer1: "Cyborg",
      wyrAnswer2: "Robot",
      userSelectionMessage: '',
    }
  },
  methods: {
    selectedAnswer(choice) {
      this.userSelectionMessage = `Nice! You Chose ${choice}!`
    }
  }
}
</script>

<!--Style for the page-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#message{
  margin-top: 30px;
  font-weight: bold;
}
</style>
