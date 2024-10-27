---
title: "Quants Quest"
author: Mehtap Hisarciklilar 
date: October, 2024
---


![](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Quants Quest

__Quants Quest__ is a web application designed for learners of Econometrics at  the beginner to intermediate level. By the use of a multiple choice quiz, it tests the knowledge of users for the basic but most crucial concepts in Econometrics. 

The application targets undergraduate students who are about to start the final year of their degree, although the usage is open to anybody who might be interested with quantitative analysis. 

The designer's aim is to test the user's knowledge on the basic concepts of Econometrics and teach them correct applications through an online interactive quiz while encouraging them to read further on the topic. This is to ensure that users understand the basics before moving on to more advanced topics in their final year. 

An interactive multiple choice quiz is used with an intention of breaking the anxiety around the learning and application of Econometric methods.

![](./assets/images/readme-images/Responsiveness-Index.png)

![](./assets/images/readme-images/Responsiveness-Quiz.png)

_Note_: Above images are obtained through http://ami.responsivedesign.is/

## User Experience

The target audience for this website are UG students of social sciences, who are half-way through their degree. 

### User Stories

Users of this web application expect the following: 

- Navigate around the site easily without frustration.
- Easily read and understand  the information provided in the pages. 
- Can see and assess their own performance and knowledge of Econometrics.
- Can easily find further information on the topic.
- Can easily find further information on the sources to check for further reading and practice. 
- Have an understanding of which topics gain priority for revision.
   
### Site Owner's Goals

I aim to break the anxiety around learning and application of econometrics by 

- creating a warm, welcoming page 
- help users practice what they learnt and learn new concepts through a quiz by 
  - selection of concepts and topics used in quiz questions 
  - providing further information on these
  - providing direction for further reading
 
### Features

#### Design

- A minimalist design is adopted to help users focus on the quiz and not get distracted by other elements on page. 

- Special care is taken to make the navigation as easy for the users as possible. 


#### Color Scheme

The background color chosen for this web application is goldenrod and white for the following reasons:

- Both these colors are not tiring the eye during longer durations of page use; 
  - white forms a good contrast with black and gray tones
  - white space in quiz space allows users to concentrate on question
  - the yellow color is intended to create warm and positive feelings on the user while a slightly darker tone avoid the discomfort of brightness.
- Elements that relate to correct answers are provided in green, while elements that relate to incorrect answers are provided in red. For example, the feedback messages, and the score board. 
- Neutral elements are mainly provided in blue, except for the "tell me more" button, which is coral to differentiate it from the other buttons. 
 
#### Fonts

The following fonts are used:  

- "Lexend" for the body and footer text. "Lexend" is chosen for the main text because a small scale study has shown that people can read and understand more easily when this font style is used.  

- "Rock Salt" is used for heading level 1. It looks dynamic, matching the attributes of a quiz.

### Wireframes

I mostly worked on hand-written wireframes as it was easier to draw quickly. A few screenshots are presented below. These were used during the initial stages of idea generation. 

| ![](./assets/images/readme-images/wireframe-1c.png) | ![](./assets/images/readme-images/wireframe-2c.png) |

| ![](./assets/images/readme-images/wireframe-3c.png) | ![](./assets/images/readme-images/wireframe-4c.png) |


### Manual Testing

The pages and functionality are tested on the following platforms: 

- Debian 
- Mac OS 24-inch Safari & Google Chrome
- iPhone 15
- iPad  

#### Manual Testing: Quiz Page

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
- A more informative message at the end of the quiz, evaluating the performance of the users (possibly through an if condition where the number of correct answers are related to different levels of performance (poor, medium, high, etc)).
- Addition of new sets of questions by topic. 
- Students to be given the ability to choose which topic to practice. 
- Random question reveal from a bigger pool of questions so that users can repeatedly take the quiz but not face the same set of questions every time.   

## Credits

- _Quants Quest_ was suggested by  Microsoft Co-Pilot as the web platform name. 
- eventListeners are added using the logic provided in love-maths walkthrough example.
- The idea of using "querySelectorAll" method and ".checked" property in the checkAnswer() function code is taken from an example provided in the following page: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
- The idea of getting dynamic values (such as question number, latest score, etc) from the webpage elements rather than using global variables in the javascript file is from Code Institute's love-maths walkthrough example. 
- The idea of using localStorage was based on a discussion that I had with my mentor (Matt Bodden) during our second meeting for this project 
- The code I used for localStorage is written using a few sources:
  - The information and examples provided on https://www.w3schools.com/html/html5_webstorage.asp, and 
  - using examples from "Getting Form Values" and "Form Submission" modules on Code Institute learning pages.
- In the checkAnswer() function, the idea of using "querySelectorAll" method and ".checked" property is taken from an example provided in the following page: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/

### Images

- Alberto Cairo's "Datasaurus Dozen" image is obtained through 
  
  Matejka, J. and Fitzmaurice G. (2017). Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing.  Available at <https://www.autodesk.com/research/publications/same-stats-different-graphs> [Accessed 11 January 2022]
- [tinyjpg](https://tinyjpg.com) platform is used for compressing images for uploads
  
- My mentor Matt Bodden's advice over resizing photos resolved issues for the design 