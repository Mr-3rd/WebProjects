let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector('#user-answer')
let submitButton = document.querySelector('#submit-answer')
let resultTextElement = document.querySelector('#result')

// create the Play Again Button
let replayButton = document.querySelector('#playAgain')

// Erase the placeholder text for the answer guess
resultTextElement.innerHTML = ''

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array country names and two-letter country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files included with script elements as one big file,
// organized in the order of the script tags. So the countriesAndCodes array from countries.js
// is available to this script.

// console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available


// TODO when the page loads, select an element at random from the countriesAndCodes array
// Use functional programing to directly collect a random Country Object from the list of country objects
let randomCountryObject = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]

// console.log(randomCountryObject) //confirm the object was collected

// TODO display the country's name in the randomCountryElement
// Set the randomly selected county name above the site answer entry location
randomCountryElement.innerHTML = randomCountryObject.name

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare the actual capital city to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'

// Create a Google search url using that same country name
let googleURL = 'https://www.google.com/search?q=' +randomCountryObject.name
// Allow the user 3 chances to answer correctly
let guessAttempts = 3;
// create an informational message with how many attempts are available
resultTextElement.innerHTML = '3 attempts remaining';

// create the empty variables that store global values to pass around differing processes below
let resultMessage;

// Right or wrong
let result;

let capitalCity;

// The number of API call attempts allowed
let maxFailAttempts = 3;

function answerSubmission() {

    // if the API call is not reachable
    if (maxFailAttempts <=0 ) {
        alert('Attempt to search for the Capital City has failed!')
        return
    }

    // if the correct answer has been entered, update the result to reflect game won
    if (result === true) {
        resultMessage = `You have entered ${capitalCity} Correctly, please Play Again below!`
        resultTextElement.innerHTML = resultMessage
        return
    }

    // Clean the user entry by trimming all end spaces, changing the entry to lowercase then
    // replacing special characters (including the period) from the entry,
    let countryCapitalGuess = userAnswerElement.value.trim().toLowerCase().replace(/[^a-zA-Z ]/g, '');

    // collect the ISO country code from the json object returned from our internal object of countries
    let randomCountryISO = randomCountryObject["alpha-2"]

    // Create a fetch url from the data returned
    let url = `https://api.worldbank.org/v2/country/${randomCountryISO}?format=json`

    // create a broken URL for testing
    // let url = `https://api..org/v2/country/${randomCountryISO}?format=json`

    // collect country specific information from the API call data return from above URL
    fetch(url)
        .then( res => res.json())
        .then( responseData => {

            // create a capitalCity
            capitalCity = responseData[1][0]['capitalCity']

            console.log(capitalCity) // Display the returned city

            // Display a "you lose" message if no attempts remain
            if (guessAttempts <= 0) {
                resultMessage = 'You have 0 attempts remaining, please Play Again below!'
                // do not process the user entry
                return;
            }


            // if a correct answer is provided,validating with same edits done to the user entry from above,
            // remove special characters and lowercase the capital city
            if ( capitalCity.toLowerCase().replace(/[^a-zA-Z ]/g, '') === countryCapitalGuess) {
                // The above line will remove the periods and apostrophes from any city with special characters as their name,
                // Would cause issues for cities with emphatical lettering


                // on the first try, display this message
                if (guessAttempts === 3) {
                    resultMessage = `This answer is correct! You Answered correctly on the first attempt`
                    // and on the second display this
                } else if (guessAttempts === 2 ) {
                    resultMessage = `This answer is correct! You Answered correctly on the second attempt`
                    // and on the final attempt, display this
                } else {
                    resultMessage = `This answer is correct! You Answered correctly on the final attempt`
                }
                // if the user does enter a correct answer, change the value of result
                result = true

                // all wrong answers
            } else {
                // subtract one attempt
                guessAttempts--

                // create a series of responses based on the amount of answer chances remain
                if (guessAttempts === 0) {
                    resultMessage = `This answer is incorrect! No attempts remain,  please Play Again below!`
                    // display a message box that will allow the user to research the country they had to guess the capital
                    let choice = confirm("You have answered incorrectly 3 times. \n" +
                        "Would you like to review the answer with a Google search?");
                    if (choice) {
                        //open a new tab with a Google search page
                        window.open(googleURL, '_blank')
                    }
                } else if (guessAttempts === 1) {
                    resultMessage = `This answer is incorrect, You have ${guessAttempts} attempt remaining`
                } else {
                    resultMessage = `This answer is incorrect, You have ${guessAttempts} attempts remaining`
                }
            }
        })
        .catch( err => {
            // Subtract a try from the failed API call attempts
            maxFailAttempts--
            console.log('ERROR: ', err)
            // Inform the user an error has occurred
            resultMessage = 'Error collecting Capital City has occurred, please try again.'
        })
        .finally( () => {
            // Set the result message after every gameplay
            resultTextElement.innerHTML = resultMessage
        })
}

// When an answer is submitted
submitButton.addEventListener('click', answerSubmission)

// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 


// Create a listener to reset the page if a user clicks the button
replayButton.addEventListener('click', function() {
    // create a dialog box to ensure the user wants to reset the game
    let choice = confirm("Would you like to answer with a capital city to a different country?");
    if (choice) {
        // Blank out the user's entry
        userAnswerElement.value = ''

        // TODO: My clever solution, reload the page and define a whole new game to search the WorldBank API
        location.reload()
    }
})
