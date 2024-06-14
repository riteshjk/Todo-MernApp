# Excercise- 1

In This excercise I solved some DSA problem with basic and optimised solution and 2 HTML and CSS related problems as well so you can find fine 2 different different solution for single problem. Additionally, you will get better idea about time and space complexity

# I added each problems solutions screenshots below you can refer those for better understanding - 

## Question 1 - 
## Expectation - You are able to see the problem statement and expected output for that and what output I got in screenshot

![Screenshot 2024-06-14 081338](https://github.com/riteshjk/Todo-MernApp/assets/96072567/403f314b-155e-47e8-8d98-b9d5ff950518)

## Question 2 - 
## Expectation - You are able to see the problem statement and expected output for that and what output I got in screenshot

![Screenshot 2024-06-14 081432](https://github.com/riteshjk/Todo-MernApp/assets/96072567/4f824d9f-bfc0-42b1-b9a4-bd43fc3ffebc)

## Question 3 - 
## Expectation - You are able to see the problem statement and expected output for that and what output I got in screenshot

![Screenshot 2024-06-14 081511](https://github.com/riteshjk/Todo-MernApp/assets/96072567/4bcfe50c-e8a4-4af6-8646-096bdf1ee19b)

## Question 5 - 
## Expectation - 
    1. All 3 boxes inside the container need to be placed horizontally.
    2. First box should occupy a fixed width of 100px, and should be left aligned
    <div class="left fixed box"></div> (line no 2)
    3. Last box hould occupy a fixed width of 100px, and should be right aligned
    <div class="right fixed box"></div> (line no 2)a
    4. The container can change widths, so the middle box should expand to the remaining
    available width between the left box and right box.
    5. The contents in the 3 boxes should not overlap

![Screenshot 2024-06-14 100321](https://github.com/riteshjk/Todo-MernApp/assets/96072567/ecde10ff-7fc8-408a-b02a-a40bec0b11e2)

I need to take care that content inside the boxes should not overlap

![Screenshot 2024-06-14 100342](https://github.com/riteshjk/Todo-MernApp/assets/96072567/fc367f07-fa36-435a-9e62-0193a2b240b9)




# Excercise- 2
# Todo-MernApp

Welcome to the MERN Todo application! This is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage their todos efficiently with features such as adding, editing, deleting, and marking tasks as completed. Additionally, users can view detailed information about each task.

 # Features

   Add Todo: Users can easily add new todos to the list by entering a task description and pressing the add button.

   Edit Todo: Edit existing todos to update their descriptions or any other details as needed.

   Delete Todo: Remove unwanted todos from the list when they are no longer needed.

   View Detailed Information: Clicking on a specific task provides users with detailed information about that task, such as its creation date, deadline (if applicable), and any additional notes.

   Mark as Completed: Users can mark a task as completed with a single click. Once completed, the task is removed from the list, helping users keep their todo list organized.

# Technologies Used
MongoDB: Database to store todo data.
Express.js: Backend framework for handling server-side logic and API requests.
React.js: Frontend framework for building a dynamic and interactive user interface.
Node.js: JavaScript runtime environment for server-side code execution.
TailwindCss: styling languages for structuring and styling the application.

# Getting Started
To run this application locally, follow these steps:

1. Clone the repository to your local machine:
  git clone <repository-url>

2. Navigate to the project directory:
  cd <project-directory>

3. Install dependencies for both the frontend and backend:
    cd client
    npm install
    cd ..
    cd server
    npm install
    cd ..

4. Start the backend server:
    npm run dev

5. Start the frontend development server:
    cd Client
    npm run dev

# I have provided all the API endpoint for your reference

   #  My backend server running on this port  - https://todo-mernapp-1-nltz.onrender.com

   1. For posting the Data -  /todo/addtodo

   2. For get the Data - /todo/gettodo

   3. For delete the data - todo/deletetodo/:id

   4. For Update the data - todo/updatetodo/:id

# Here I have added all the screenshots of all the pages 

# Home Page -
 ![Screenshot 2024-06-14 075637](https://github.com/riteshjk/Todo-MernApp/assets/96072567/3288b4fb-3276-43e3-95fd-aea067a89260)

# Task-List Page - 
![Screenshot 2024-06-14 075715](https://github.com/riteshjk/Todo-MernApp/assets/96072567/0670b92d-f4d9-4bb0-80a4-6c070a1077e7)

# Edit Page - 
![Screenshot 2024-06-14 075743](https://github.com/riteshjk/Todo-MernApp/assets/96072567/66099146-3dac-42ad-abf0-563243a2f254)

# Task Detail Page - 
![Screenshot 2024-06-14 075759](https://github.com/riteshjk/Todo-MernApp/assets/96072567/1e0e6314-f8f7-4af2-8906-d3568e3dc1d7)

# Here is the Deployment Link of my application 

 https://todo-mern-app-mu.vercel.app/ 
  

