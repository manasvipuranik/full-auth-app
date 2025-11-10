crochet creations
this is a full stack web application for a small crochet business. it showcases handmade crochet items and includes user authentication features. the website allows users to sign up, log in, and browse available products.
project overview
the project demonstrates a functional connection between a react frontend and a node.js backend with a mongodb database. it focuses on simplicity, responsiveness, and smooth authentication flow.
features


user registration and login


password encryption using bcrypt


mongodb for storing user data


protected routes for logged in users


clean and simple user interface


responsive design for desktop and mobile


technologies used
frontend: react, react router dom, axios
backend: node.js, express.js, mongodb, mongoose, bcryptjs, cors, dotenv
setup instructions


clone the repository
git clone <repository_link>
cd crochet-creations


setup backend
cd backend
npm install
create a .env file in the backend folder and add:
MONGO_URI=mongodb://127.0.0.1:27017/crochet-creations
PORT=5000
run the server
npm run dev


setup frontend
open a new terminal
cd frontend
npm install
start the frontend
npm run dev


open the application in your browser
navigate to http://localhost:5173


usage


new users can sign up using the signup page


existing users can log in with their credentials


after logging in, users are redirected to the home page where crochet products are displayed


users can log out from the navigation bar




ensure mongodb is running locally or use an online mongodb connection string


all api calls run on http://localhost:5000


this project provides a clean and simple example of a functional full-stack web application for a small business. it is easy to customize and extend for real-world use cases.
