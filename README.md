# 🌍 Countries API

A responsive React application that displays country information using the REST Countries API (v3.1).

This project was built for educational and portfolio purposes to practice working with APIs, dynamic routing, state management, and responsive UI development in React.

---

## 🚀 Live Demo

👉 https://api-rest-countries-mvukalov.netlify.app/

---

## ✨ Features

- Browse a list of all countries
- View detailed country information
- Dynamic routing with React Router
- API integration using Fetch
- Loading state handling
- "No data" fallback state
- Responsive design (mobile & desktop)
- Clean UI with Bootstrap styling

---

## 🛠 Tech Stack

- React
- React Router
- JavaScript (ES6+)
- React Bootstrap
- REST Countries API (v3.1)
- Netlify (deployment)

---

## 📦 Run Locally

Clone the repository:

```bash
git clone https://github.com/mvukalov/API-rest-countries.git
```

Navigate into the project folder:

```bash
cd API-rest-countries
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

---

## ⚙️ How It Works

1. The application fetches country data from the REST Countries API.
2. All countries are displayed in a table format.
3. Clicking on a country navigates to a dynamic details page.
4. The country code (cca3) is used for reliable routing and API requests.
5. Data is rendered dynamically with safe fallbacks for missing values.

---

## 📁 Project Structure

```
API-rest-countries/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── Country.js
│   ├── stylesheets/
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

---

## 📡 API

Data provided by:

https://restcountries.com/

Endpoint used:
https://restcountries.com/v3.1/

---

## 👤 Author

Martin Vukalović

---

## 📄 License

This project is intended for educational and portfolio purposes.
