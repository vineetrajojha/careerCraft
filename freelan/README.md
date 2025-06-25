# CareerCraft E-commerce Platform

CareerCraft is a modern e-commerce web application for professional and educational products, built with React and Redux Toolkit. This project is organized for scalability and maintainability, with a clear separation of features, pages, assets, and data.

## Table of Contents
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Best Practices](#best-practices)
- [Learn More](#learn-more)

## Project Structure
```
freelan/
├── public/                     # Static files and images
│   ├── products/               # Product images
│   ├── partners-logos/         # Partner logos
│   └── ...                     # Other static assets (logos, icons, etc.)
├── src/
│   ├── app/                    # App-wide store, API, and constants
│   ├── assest/                 # Images and graphics for the app
│   ├── features/               # Feature-based modules (Redux slices, components)
│   │   ├── admin/              # Admin panel features
│   │   ├── auth/               # Authentication (login, signup, etc.)
│   │   ├── cart/               # Cart management
│   │   ├── common/             # Common UI components (Navbar, Footer, Modal, etc.)
│   │   ├── counter/            # Example counter feature
│   │   ├── navbar/             # Navbar and related styles
│   │   ├── order/              # Order management
│   │   ├── product/            # Product listing and details
│   │   └── user/               # User profile and orders
│   ├── pages/                  # Page-level components (Home, About, Contact, etc.)
│   ├── App.js, App.css         # Main app component and styles
│   ├── index.js, index.css     # Entry point and global styles
│   └── ...                     # Other configs and helpers
├── data.json                   # Sample data for development
├── tailwind.config.js          # Tailwind CSS configuration
├── .gitignore                  # Files/folders to ignore in git
├── package.json                # Project metadata and scripts
├── package-lock.json           # Dependency lock file
├── README.md                   # Project documentation
└── vercel.json                 # Vercel deployment config
```

## Available Scripts
In the `freelan` directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
Removes the single build dependency from your project (irreversible).

## Environment Variables
- Store sensitive keys and configuration in a `.env` file at the project root.
- Example:
  ```env
  REACT_APP_API_URL=https://your-api-url.com
  ```
- **Note:** `.env` files are excluded from git via `.gitignore`.

## Best Practices
- Do not commit sensitive data or credentials.
- Do not commit `node_modules`, build output, or IDE settings.
- Organize assets and components for clarity and scalability.
- Use Redux Toolkit for state management and maintain feature separation.
- Use environment variables for configuration.

## Learn More
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)


