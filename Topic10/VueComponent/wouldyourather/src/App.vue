<template>
  <div id="app">

<!--    Heading of the page can go here, could also be blank-->
    <h1>Would Your Rather?!</h1>

<!--    Generated cvontent from the WouldYouRather component, using the - syntax allows a clearer
understanding of code and there are no - based html tags-->
    <would-you-rather v-for="question in questions" v-bind:question="question.wyrQuestion"
    v-bind:answer1="question.wyrAnswer1" v-bind:answer2="question.wyrAnswer2"
    v-on:answer-changed="selectedAnswer">
<!--      V-bind ties the data for the radio buttons to the
component allowing me to generate data -->
    </would-you-rather>

    <ul id="message" v-for="message in userSelectionMessages">
      <li>
        {{message}}
      </li>
    </ul>
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
      questions: [
        {
          id: 0,
          wyrQuestion: "Would you rather be a cyborg or a robot?",
          wyrAnswer1: "Cyborg",
          wyrAnswer2: "Robot",
        },
        {
          id: 1,
          wyrQuestion: "Would you rather live in a base under the ocean or a floating base in the sky?",
          wyrAnswer1: "Ocean",
          wyrAnswer2: "Sky",
        },
        {
          id: 2,
          wyrQuestion: "Would you rather drive a race car or monster truck?",
          wyrAnswer1: "Race Car",
          wyrAnswer2: "Monster Truck",
        }

      ],
      userSelectionMessages: [],
    }
  },
  methods: {
    selectedAnswer(choice) {
      this.userSelectionMessages.push(`Nice! You Chose ${choice}!`)
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

ul {
  font-weight: bold;
  display: table;

  /* select a width smaller than questions to center list below */
  width: 250px;
  /* automatically fit to height of questions and answers */
  height: auto;
  /* center the object on screen */
  margin: 0 auto;
  /* left-align the text */
  text-align: left;

}

</style>
