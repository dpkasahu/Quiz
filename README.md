🧠 Quiz App (MERN Stack)
A Full-Stack Quiz Application built with the MERN stack — allowing users to take quizzes, save results, and manage questions dynamically!

✨ Features
🚀 Authentication (optional, if you add later)

📝 Take multiple-choice quizzes

✅ Instant feedback on correct and incorrect answers

📊 Score tracking

🛠️ Admin panel (optional for managing questions)

🌐 Backend API built with Node.js + Express

🗄️ MongoDB database for storing quiz questions and user results

🛠 Tech Stack

Frontend	Backend	Database
React.js	Node.js + Express.js	MongoDB (Atlas / Local)

📦 Installation Instructions
1. Clone the repository:
git clone https://github.com/dpkasahu/Quiz.git
cd Quiz

3. Set up the Backend (Server)
cd server
npm install

Create a .env file inside /server and add:
MONGO_URL=your_mongodb_connection_string
PORT=5000

Start the server:
npm run start
Server will run at http://localhost:5000.

3. Set up the Frontend (Client)
cd client
npm install

Start the React app:
npm run start
Frontend will run at http://localhost:3000.

⚙️ API Endpoints

Method	Endpoint             	Description
GET   	/api/questions      	Fetch all quiz questions
POST  	/api/questions       	Add a new question
DELETE	/api/questions/:id	  Delete a question
POST	  /api/submit	          Submit quiz answers and calculate score


📸 Screenshots

Home	Quiz	Result
(Optional — Add screenshots by uploading them.)

📄 Folder Structure
/Quiz
  ├── /client     (React Frontend)
  └── /server     (Node/Express Backend)
  
🚀 Deployment
You can deploy the app to:

Frontend: Reactjs, Tailwind css

Backend: Node , Express

Database: MongoDB Atlas (Cloud MongoDB)

📄 License
This project is open-source and available under the MIT License.

