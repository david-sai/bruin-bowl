# How to run the app locally:
## Frontend:
0. **Start in the main bruin-bowl directory (the folder storing this README).**
1. **Switch to the frontend directory bruin-bowl.**
    ```bash
    cd bruin-bowl
    ```
2. **Install all dependencies.**
    ```bash
    npm install
    ```
3. **Execute start script.**
    ```bash
    npm start
    ```
## Backend:
### Running the Server

0. **Install the project dependencies (for first time):**
   ```sh
   cd bruin-bowl-backend
   npm install
   npm install -g --force nodemon
   ```
   
1. **Setup environment variables (inside bruin-bowl-backend):**
   ```sh
   touch .env
   ```
   **Paste** the following inside the .env file: MONGODB_URI=mongodb+srv://BruinBowl35L:PZ7R06@bruin-bowl-database.dytrqfo.mongodb.net/?retryWrites=true&w=majority&appName=Bruin-Bowl-Database
      
2. **Navigate to the `src` directory:**
   ```sh
   cd src
   nodemon server.js
   ```
   
The server should be up and running on port 4000!

Here are our endpoints: 

- **POST user/signup** - Signs up a user  
  Takes `username` and `password`.

- **POST user/signin** - Signs in a user  
  Takes `username` and `password`.

- **GET user/get** - Gets user information  
  Takes `username`.

- **DELETE user/delete** - Deletes a user  
  Takes `username`.

- **GET user/getscore** - Gets user score  
  Takes `username`.

- **POST user/updateScore** - Updates user score  
  Takes `username` and `amount` to increment score.

- **GET user/leaderboard** - Gets the leaderboard  
  Returns an array of user objects sorted in score order.

- **POST quiz/create** - Creates a question  
  Takes `question`, `answer`, `3 false options`, and `category`.

- **POST quiz/search** - Searches for a question  
  Takes `keyword` to search for.

- **GET quiz/** - Gets a question  
  Takes `category`.

## Playthrough

1. Navigate to the home page of the app. You should see a large blue button at the bottom, with the words "Sign up to start."
2. After clicking on the button, you will be directed to the login page where you can choose a username, password, and profile picture.
    - Note that if you already have an account, you may click the "sign in" link instead to sign into your account.
3. After logging in, you may click the "Start playing" button to begin your playthrough.
4. Then, you will be redirected to select your desired question categories and gamemodes.
5. Finally, click "Start Game" to play!
    - Select your answer from the given options, then submit.
    - Getting the question right allows you to advance to the next question with the "Next Question" button.
    - Getting the question wrong, or running out of time, forces you to hit "Restart Quiz" in order to start a new game.
    - You may navigate to other features, such as question searching, adding questions, or leaderboard through the navigation bar at the top of the website.

Please note that if you are already logged in, you may skip steps 1 through 3. 


## Motivation:

When we first created a group for the CS35L project, our motivation was to create something valuable. Something useful, and relevant to our everyday lives. And as UCLA students, we unanimously agreed on a website that could test our knowledge of UCLA trivia in a fun and interactive way. As we expanded our features, we found that our website could also allow us to quiz ourselves on other subjects like computer science in an engaging format. 

The original inspiration for our project is Quiz Bowl, an academic trivia competition that, like the essential gameplay of our project, awards points based on the speed of the participant’s response. In this project, we also provided a variety of features that adapt aspects of Quiz Bowl to an appropriate web-based equivalent. 

For example, the leaderboard displays scores to bolster competition. 

<img src=./bruin-bowl/public/Readme-Screenshots/LeaderboardDisplay-Screenshot.png width="400" height="200">

- Above is the leaderboard, where user information is displayed and updated in real time. This fosters competition by allowing users to see how their score compares to others. 

Meanwhile, the visual timer component replaces the verbal countdown of Quiz Bowl staff so players know how much time they have left before the question ends. 

<img src=./bruin-bowl/public/Readme-Screenshots/Timer-Screenshot.png width="250" height="250">

- 15 seconds are given for each question. Points are awarded based on the timeliness of the response. 

Other features include game modes and question categories to keep each playthrough fresh and exciting. 

<img src=./bruin-bowl/public/Readme-Screenshots/GameMode-Screenshot.png width="200" height="350">

- In the Game page, users can select the game mode and category of question which suits them best before starting the game. 

And of course, to ensure that users are real people and to add an extra layer of security to the application, login requires a username, password, and profile picture. 

<img src=./bruin-bowl/public/Readme-Screenshots/SignUp-Screenshot.png width="250" height="350">

- A sign up popup allows users to create a username, password, and choose a profile picture from a few options. 

<img src=./bruin-bowl/public/Readme-Screenshots/SelectPFP-Screenshot.png width="400" height="200">

- While a different popup allows users to select a profile picture from a range of options. 

## Features 
The three features we originally included in the project proposal are the leaderboard and point calculation (see above), category and game mode selection (see above), and profile picture selection. 

When users first create their account, they have the option of selecting a profile picture. 

<img src=./bruin-bowl/public/Readme-Screenshots/ProfilePicture-Screenshot.png width="300" height="200">

- Users may choose a profile picture from a selection of profile pictures. 

In addition to these three features, we implemented additional features in order to improve the user experience and enhance gameplay. 
Additional features include the "add questions" page:

<img src=./bruin-bowl/public/Readme-Screenshots/AddQuestion-Screenshot.png width="325" height="350">

- In the Add Question page, users can create a question, assign an answer and 3 incorrect options, and choose a question category. After the user hits "Submit", the resulting question will be added to the question database. 

<img src=./bruin-bowl/public/Readme-Screenshots/QuestionPopup-Screenshot.png width="300" height="250">

- Afterwards, a popup will confirm that the question has been added to the database. The question prompt is shown on top, with the answer in green and the wrong answers below.

The "search questions" feature:

<img src=./bruin-bowl/public/Readme-Screenshots/QuestionSearch-Screenshot.png width="350" height="300">

- The question search page allows users to search through the database of questions. It displays the question category, prompt, and options.

Finally, the actual gameplay features:

<img src=./bruin-bowl/public/Readme-Screenshots/Gameplay-Screenshot.png width="500" height="300">

- The gameplay features a number of options, which can be selected by the user.
- After clicking "Submit," the user either receives a Game Over message (if the answer is incorrect or the user ran out of time), or gains score and proceeds with the "Next Question" button.
- At the bottom are the Game Score (the current score streak) as well as the total score (of the current user) and the remaining time. 

## **Contribution Guide**

Always create a new branch from dev when working on a task or issue. 
Once you've made your changes, submit a PR on GitHub.

1. Switch to the dev branch and pull the newest changes:
   ```bash
   git switch dev
   git pull
   ```

2. Create a new branch for your work. Please name "your_task" as specific and accurate as possible (at max 4 words):
   ```bash
   git switch -c [your_name]/[your_task]
   ```

3. Save your files after making contributions.
   ```bash
   git add .
   git commit -m "Finished [your_name]/[your_task]"
   ```

4. Once you're finished, push your branch to the remote repository:
   ```bash
   git push origin [branch_name]
   ```

5. Go to GitHub and submit a PR to merge your changes into the dev branch.

## Credits
Created by Andrew, Brayden, Daniel, David, Jon, Zach
CS35L Group name: Six Body Problem
Group number: 27

Credits to the React tutorial for outlining how context is used in React. 
- [React tutorial link](https://react.dev/learn/scaling-up-with-reducer-and-context)

Credits to NetNinja on Youtube for foundations of using MongoDB and web development backend. 
- [NetNinja Youtube link](https://www.youtube.com/@NetNinja)

Credits to Daily Tuition on Youtube for a tutorial on creating leaderboards using React.
- [Daily Tuition Youtube link](https://www.youtube.com/watch?v=p_046Qe19p0&t=1298s&ab_channel=DailyTuition)

The Joe Bruin logo is the property of UCLA and its respective owners. All rights to the logo and its use are retained by UCLA. This website is not affiliated with, endorsed by, or sponsored by UCLA. The use of the Joe Bruin logo is for identification and informational purposes only.

All product names, logos, and brands are property of their respective owners. All company, product, and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
