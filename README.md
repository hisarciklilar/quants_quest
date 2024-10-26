# Quants Quest


__Quants Quest__ is a web application designed for learners of Econometrics at  beginner level. It tests the knowledge of users for the basic but most crucial concepts in Econometrics. 

The application targets undergraduate students who are about to start the final year of their degree, although the usage is open to anybody who might be interested with quantitative analysis. 

The designer's aim is to test the user's knowledge on the basic concepts of Econometrics and teach them correct applications through an online interactive quiz. This is to ensure that users understand the basics before moving on to more advanced topics. 

## Features

| Feature being tested | Expected Outcome | Testing Performed | Actual Outcome | Result (Pass or fail) |
| -------------------- | ---------------- | ----------------- | -------------- | --------------------- |
| Cursor's look during option selection | Cursor changing to pointer on any text area for the options (answer selection)  | Move cursor over answer option text | Cursor changes to pointer when over text | Pass |
| Radio buttons | Allow single option selection by the user| Select different answer options to see if selection is active in last clicked button | Only  a single option selection is allowed | Pass |
| "Submit answer" button  | A positive or negative feedback provided below question options indicating whether or not the submitted answer is correct | (1) Selected wrong answer to see the negative feedback text; (2) Selected correct answer to see the positive feedback text | Positive or negative feedback appears below options with a text, a small icon and color differentiation | Pass |
| "Submit answer" button:  Disable multiple submits to the same question  | Users cannot locate the submit button once they submit their answer  | Chose correct and then incorrect answers and click submit button | Submit button hidden from page | Pass |
| "Submit answer" button: Correct and Incorrect answer tally updated on click| Users see the updated number of correct answers and number of incorrect answers at the bottom of the quiz area   | Selected correct and incorrect options and clicked submit to observe the change in reported scores at the bottom of the page  | (1) Correct answers score (displayed in green colour) increments by one once the user submits correct answer; (2) Incorrect answers score (displayed in red colour) increments by one once the user submits incorrect answer    | Pass |
| "Tell me more" button  | Further information is displayed to users about the knowledge being tested and the book source to check for more reading.  | Clicked on "tell me more" button after submitting answers to each question in quiz  and checked if the correct information text and correct book chapter is displayed  | Correct information and book chapter are displayed after a click of "tell me more button" | Pass |
| "Tell me more" button: Hide question and its options as well as the positive/negative feedback from users | Quiz question and the feedback on submission are hidden from user, allowing them to focus on the information block | Clicked on "tell me more" button after submitting answers to each question in quiz  and checked if the question and feedback text are hidden  | Question and feedback texts are hidden while displaying more information on the question's topic | Pass |
| "Tell me more" button: Hidden from user on click |  "Tell me more" button is hidden from user once the information is displayed after a click on the same.  This ensures users not getting confused about this button as the information is already displayed to them. | Clicked on "tell me more" button after submitting answers to each question in quiz and checked if the button is hidden on click | Button hidden from display while information is displayed for the user | Pass |
| "Close" button in information area | Information text hidden from user while "tell me more" button and the question & options are visible again once the user closes the information window.  | Clicked on "close" button while information was on display | Information area is hidden from display while users once again see the question & options and the "tell me more" button | Pass |
| "Next" button" | (1) If not at the end of quiz: New question & options displayed to user and the "submit" button is visible again (2) If at the end of quiz: end of quiz message with the final score is displayed to user while hiding all buttons (i.e. "submit", "tell me more", "next") | Moved on to the end of quiz by clicking next and checked if the message appears after last question | End of quiz message and the final scores are displayed to user while hiding the "submit", "tell me more", "next" buttons   | Pass |
| "Next" button : Hide positive/negative feedback on the last attempted question | The positive/negative feedback provided for the last attempted question disappears from page once user clicks "next" to work on the next question | On submission of an answer to a question, clicked on the "next" button (1) after using the "tell me more" button; (2) without using the "tell me more" button and checked if the feedback is hidden | Positive/negative feedback on last attempted question disappears from the user's sight on click to "next" button | Pass |
| Score calculations | (1) Correct and incorrect answer tally provided at the bottom of the page throughout the quiz; (2) Correct number of attempted questions and number of correct answers are calculated and provided to user in the end-of-quiz message    | Selected different combinations of correct and incorrect answers and checked the score calculations throughout. Also did this while skipping some questions. | Correct numbers of (i) correct answer tally; (2) incorrect answer tally; (3) total number of attempted questions are calculated and reported in relevant places.  | Pass |



| -------------------- | ---------------- | ----------------- | -------------- | --------------------- |


| -------------------- | ---------------- | ----------------- | -------------- | --------------------- |


| -------------------- | ---------------- | ----------------- | -------------- | --------------------- |


| -------------------- | ---------------- | ----------------- | -------------- | --------------------- |


## Future Additions
- A visual progress bar at the bottom of the question area
  
## Credits

- _Quants Quest_ was suggested by  Microsoft Co-Pilot as the web platform name. 
- The idea of using "querySelectorAll" method and ".checked" property in the checkAnswer() function code is taken from an example provided in the following page: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
- The idea of getting dynamic values (such as question number, latest score, etc) from the webpage elements rather than using global variables in the javascript file is from Code Institute's love-maths walkthrough example. 