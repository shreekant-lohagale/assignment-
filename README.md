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

## New Features

- 🃏 **Animated Flip Card**: Profile cards now flip on hover, showing user details and social links on the back.
- 🎨 **Social Icons**: Email, LinkedIn, and GitHub icons are included and styled for both light and dark mode.
- 🌓 **Improved Dark/Light Mode**: All card elements, including icons and badges, are visible and styled for both themes.
- 👤 **Avatar & Role Badge**: Each card displays a user avatar and a prominent role badge.
- ✨ **Fade-in Animation**: Cards animate in with a smooth fade effect.

---

## More Highlights

- 🏆 **Accessibility**: All interactive elements are keyboard accessible and have clear focus states.
- 🖼️ **Responsive Design**: Cards adapt to all screen sizes, from mobile to desktop.
- 🛠️ **Easy Customization**: Easily update user data, card size, and styles via React props and styled-components.
- 🚀 **Performance**: Optimized rendering for smooth animations and fast load times.
- 🧩 **Component Reusability**: Modular components for easy maintenance and extension.
- 📝 **Clean Code**: Follows best practices for readability and maintainability.
- 🌐 **Open Source**: Freely available for use and modification.

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

