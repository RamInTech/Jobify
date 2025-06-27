![image](https://github.com/user-attachments/assets/41e68b9e-048d-4464-a6d5-ebd6b36116e5)

# Jobify - Job Portal Website 💼

Jobify is a simple job portal web application where users can **browse jobs**, **post new jobs**, **edit existing jobs**, and **delete posted jobs**. It uses a local JSON server to simulate a backend, making it ideal for learning and prototyping.

---

## ✨ Features

✅ Browse available jobs  
✅ Post new job listings  
✅ Edit existing job details  
✅ Delete posted jobs  
✅ Simple and responsive UI built with **React & Tailwind CSS**  
✅ Uses a **JSON server** to simulate backend API  

---

## 🛠️ Tech Stack

- **React** (Frontend UI)  
- **Tailwind CSS** (Styling)  
- **JSON Server** (Mock API for job listings)  
- **Vite** (Development server & bundler)  

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RamInTech/Jobify.git
cd Jobify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the JSON Server (in a separate terminal)

```bash
npx json-server --watch src/jobs.json --port 8000
```

> Make sure your `jobs.json` file is located inside the `src` folder.

### 4. Start the React app

```bash
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000)  
The JSON Server will run at [http://localhost:8000](http://localhost:8000)  

---

## 📁 Folder Structure

```
Jobify-JobPortal_Website/
├── src/
│   ├── components/   // Reusable components
│   ├── pages/        // Page components
│   ├── jobs.json     // Local job listings (JSON Server)
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── ...
```

---

## 🚀 Future Improvements

- Filter and search functionality  
- Authentication for job posting/editing  
- Persistent backend (replace JSON Server with real database)  
- Better form validation  

---

## 👨‍💻 Author

**Ramkumar M**
