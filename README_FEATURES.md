# Responsive React Profile Card App

A beautiful, responsive profile card app built with React, Tailwind CSS, and styled-components. Features include dark mode, search filtering, animated flip cards, and a clean UI.

---

## Features

- ⚡ **100 Indian Profile Cards** (randomized names, roles, and descriptions)
- 🌗 **Dark Mode Toggle**
- 🔍 **Search Filter** (by name)
- 🃏 **Animated Flip Card Effect** (styled-components)
- 📱 **Responsive Grid Layout** (1/2/4 columns)
- ✨ **Modern UI with Tailwind CSS**
- 📝 **Copyright Footer**

---

## Folder Structure

```
my-profile-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ProfileCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── DarkModeToggle.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── package.json
└── ...
```

---

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-profile-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   npm install tailwindcss postcss autoprefixer styled-components
   npx tailwindcss init
   ```
3. **Tailwind Setup**
   - Ensure `src/index.css` includes:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - `tailwind.config.js`:
     ```js
     module.exports = {
       content: ["./src/**/*.{js,jsx,ts,tsx}"],
       darkMode: 'class',
       theme: { extend: {} },
       plugins: [],
     };
     ```
4. **Start the app**
   ```bash
   npm start
   ```

---

## Component Overview

### `App.js`
- Main logic: manages users, search, dark mode, and layout.
- Generates 100 Indian profiles with names, roles, and descriptions.
- Passes props to child components.
- Includes copyright footer.

### `ProfileCard.jsx`
- Flip card animation using styled-components.
- Front: user image, name, role.
- Back: description and contact button.
- Responsive and visually appealing.

### `SearchBar.jsx`
- Search input styled for both light and dark mode.
- Filters profiles by name.

### `DarkModeToggle.jsx`
- Button to toggle dark/light mode.
- Updates UI colors accordingly.

---

## Credits

- UI/UX, code, and concept by **Shreekant Sunil Lohagale**

