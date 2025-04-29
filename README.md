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


![Screenshot 2025-03-27 115144](https://github.com/user-attachments/assets/a2cc5d26-75e9-4ea2-b8c0-532ee0c89a0a)
![Screenshot 2025-03-27 115201](https://github.com/user-attachments/assets/dfa8dab5-2616-4ade-9240-83ad864ca674)

![Screenshot 2025-03-27 115823](https://github.com/user-attachments/assets/1174b80f-dc03-4703-80a3-3a9535691eeb)
![Screenshot 2025-03-27 115655](https://github.com/user-attachments/assets/95a33c2e-1ff6-493a-808d-453876df3df2)

![Screenshot 2025-03-27 121637](https://github.com/user-attachments/assets/6f24455a-44df-415d-b424-b5e38fc211b8)

![Screenshot 2025-03-27 121410](https://github.com/user-attachments/assets/20a1cc2f-fdc9-4b63-9980-a05d6dab9255)

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

