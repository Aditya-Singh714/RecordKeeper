---

## 📄 `ejs_mongodb`: Web App using EJS + Express + MongoDB

```markdown
# 🌐 EJS MongoDB CRUD Web App

A simple full-stack web application using **EJS** for templating, **Express.js** for routing, and **MongoDB** for data persistence. The app provides a clean UI for creating, reading, updating, and deleting data entries.

---

## 🧩 Features

- 📝 Create new entries via forms
- 📖 Display all records dynamically
- ✏️ Update and delete records
- 🎨 Render dynamic views using EJS
- 🔌 Fully connected with MongoDB

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose

---

## 🗂️ Folder Structure

ejs_mongodb/
├── views/
│ ├── index.ejs
│ ├── create.ejs
│ └── edit.ejs
├── routes/
│ └── records.js
├── models/
│ └── Record.js
├── public/
│ └── style.css
├── app.js
├── package.json

yaml
Copy
Edit

---

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/your-username/ejs_mongodb.git
Install dependencies

bash
Copy
Edit
npm install
Set up MongoDB
Update .env or the MongoDB URI in your code.

Start the server

bash
Copy
Edit
npm start
📚 Pages & Routes
Route	Method	View	Description
/	GET	index.ejs	Show all records
/create	GET	create.ejs	Show create form
/create	POST	—	Submit new record
/edit/:id	GET	edit.ejs	Show edit form
/edit/:id	POST	—	Submit update
/delete/:id	POST	—	Delete a record

💡 What You Learn
Build full-stack apps with templating

MongoDB schema design

Express routing & controller logic

CRUD flow from frontend to backend

🎯 Use Cases
Student management

Notes app

Contact manager

📸 Screenshots
(Add UI screenshots if available)

🧑‍💻 Author
Aditya Singh
LinkedIn • GitHub

yaml
Copy
Edit

---
