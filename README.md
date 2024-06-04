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


## Motivation:

When we first created a group for the CS35L project, our motivation was to create something valuable. Something useful, and relevant to our everyday lives. And as UCLA students, we unanimously agreed on a website that could test our knowledge of UCLA trivia in a fun and interactive way. As we expanded our features, we found that our website could also allow us to quiz ourselves on other subjects like computer science in an engaging format. 

The original inspiration for our project is Quiz Bowl, an academic trivia competition that, like the essential gameplay of our project, awards points based on the speed of the participant’s response. In this project, we also provided a variety of features that adapt aspects of Quiz Bowl to an appropriate web-based equivalent. 

For example, the leaderboard displays scores to bolster competition. 
![Leaderboard Display Component image](https://photos.app.goo.gl/EWkkz57nVN19in5w5)
Above is the leaderboard, where user information is displayed and updated in real time. This fosters competition by allowing users to see how their score compares to others. 

Meanwhile, the visual timer component replaces the verbal countdown of Quiz Bowl staff so players know how much time they have left before the question ends. 

15 seconds are given for each question. Points are awarded based on the timeliness of the response. 

Other features include game modes and question categories to keep each playthrough fresh and exciting. 

In the Game page, users can select the game mode and category of question which suits them best before starting the game. 

And of course, to ensure that users are real people and to add an extra layer of security to the application, login requires a username, password, and profile picture. 

A sign up popup allows users to create a username, password, and choose a profile picture from a few options. 

While a different popup allows users to select a profile picture from a range of options. 


**Contribution Guide**

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
