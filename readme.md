# Workout Wonder
## Table of Contents
* Description
* Running Screenshot
* Features
* Technologies Used
* Installation Instruction
* Approach

## Description
Workout Wonder is an online application that allows the users to create an account and store a workout routine. It utilizes 
Express and MongoDB that is hosted on mLab. Mongoose is used to speak to the database, and Handlebars renders the view. I 
decided on this application because I was switching workout routines and couldn't find any quick methods online, so here we 
are.

## Running Screenshot
<img src='https://i.gyazo.com/1e3f97daa7b045b9d6f3fc823afdac0d.png'></img>

## Features
* Achieved
  * Users can create an account and log in.
  * Users can store multiple workout day(eg. legs, chest, back...)
  * Users can store multiple exercises within those workouts(eg. squat, sleep, eat pizza...)
  * Users can log out.
* Features to Add
  * Updating and deleting exercises.
  * Storing a log of workout progress.
  * A master log that stores all changes to the workout.
  
## Technologies Used
* MongoDB
* Express
* Bcrypt
* Node.js
* Passport
* Mongoose
* HTML
* CSS
* JavaScript

## Installation
* First, fork the repo.
  * <img src='https://media.giphy.com/media/dSeVnBZdeesx586hpl/giphy.gif'></img>
* After forking, clone down the repo.
  * <img src='https://media.giphy.com/media/3n7cJ3aw1BccfikRcx/giphy.gif'></img>
  * Your code should resemble this in your terminal ``` git clone [copied gitHub fork link/SSH] ```
* Make sure mongod is installed on your computer.
* Run node index.js **OR** nodemon.
* Go to localhost: 3000 and create a workout!

## Approach
* Before opening my VS Code, I planned everything out. First, I decided on everything that I wanted the project to do. After that, I decided on the MVP, **minimum viable product**. Everything that wasn't the MVP became a stretch goal, and wasn't as important to complete as the others. 
* After deciding on the features of the project, I created the models, a server, and connected to the server. I found it much easier for me to combine the routes and controller, as I felt condensed it while still maintaining readability for a small scale app like this.
* After completing the ability to create workouts and exercises, and store the exercises within the workouts, I created the User controller and added authentication to it.
* After completing the logic, I began working on views. I struggled on the syntax for views since I was still a bit confused on what was being passed through to views, and wanting certain parts to only render while a user was logged in or not. A lesson I learned overall in this lab was to pay attention to syntax. A simple missing backslash or overlooked parenthesis can easily be overlooked.
* After finishing the logic, I created an mLab database and connected through the terminal then connected and pushed to Heroku.

## Known Bugs
* Users can signup with an existing account's email, not 100% sure on the outcome of this, but it does not throw an error whenever users attempt this.
