# Modern Movie Quiz

This Quiz was made for people to test their knowledge on movies,The Quiz contains and intro page,three pages for questions and two pages for the results of the first two pages and a final page at the end that tally up the score for the user.


## The Intro Page

The Intro page offers the user a brief description of how the quiz works,once the user is then ready to begin the quiz, they type their name into the textbox provided and press the "save" button.Once the user presses this button an alert message will appear and it will display the text "welcome (username)".Once this is done the user has to press the begin button which will start the quiz for them.If however the user doesnt fill in their name in the username textbox, they will get another alert message with the text "please enter name first".This is done by using a if statement in a function called  "loginCheck" and it is called when the user presses the "submit"button.


## Question Section Of Quiz

When the first page of the Quiz is displayed the user will see they are given three questions with three choices,when the user moves the mouse over the answer they wish to select they notice that the answer they are hovering over will be highlighted in yellow and also underlined so that the user is confident that their choice is been selected,The user will also be able to observe that their own username is also on the page aswell as the section/page number and on the bottom another button this time it says submit.When the user selects their answers and then clicks on the submit button they will be brought to the answers page,if however they dont answer the questions or forget to answer one then the submit button will display a alert message with the text "please answer all questions first". 


## Answer Section Of Quiz

Once the user arrives at the answer page they will be shown the questions and the answers again however when they look at the answers this tiem they will notice that the correct answer is green if the user answers correctly their answer will be highlighted geen and they will be given a point for it,If the user gives an incorrect answer for the question then their answer will be highlighted red and the correct answer will be highlighted green,Once the user has then read through the results they simple click the next button to move onto the next section.


## Responsiveness

A media query was created in the css file to appropriately display the contents of the webpage on mobile and tablet devices so that it maybe be accessible to people using devices other than a laptop.flexbox was then used to help provide responsiveness to the web page.



