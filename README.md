# 🎬 Netflix Clone - React.js & Firebase

A modern, responsive Netflix clone built with React.js and Firebase that replicates the core functionality of the Netflix streaming platform. This project demonstrates full-stack development skills with user authentication, real-time database, and responsive design.

<!-- ![Netflix Clone Preview](./public/background_banner.jpg) -->

## 🌟 Features

- **User Authentication**: Secure sign-up and login using Firebase Authentication
- **Responsive Design**: Fully responsive layout that works on all devices
- **Video Player**: Built-in video player for streaming content
- **Content Browsing**: Browse movies and TV shows with a Netflix-like interface
- **Protected Routes**: Authentication-based routing to protect content
- **Toast Notifications**: User feedback for actions and errors
- **Modern UI/UX**: Clean and intuitive user interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18+** - Frontend JavaScript library
- **Vite** - Next generation frontend tooling
- **React Router DOM v6** - Client-side routing
- **React Hooks** - For state and side effects
- **CSS3** - Styling with modern features like Flexbox and Grid

### Backend & Authentication
- **Firebase Authentication** - User sign-up and login
- **Cloud Firestore** - Real-time NoSQL database
- **Firebase Hosting** - Production deployment (configurable)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **React Toastify** - Toast notifications
- **Moment.js** - Date and time manipulation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (v8 or later) or yarn
- Firebase account (for backend services)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashrajKamble/Netflix-Clone-Using-React-js-and--FireBase.git
   cd Netflix-Clone-Using-React-js-and--FireBase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**
   - Create a new project in the [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication in the Authentication section
   - Create a Firestore database in test mode
   - Get your Firebase configuration from Project Settings > General > Your apps
   - Update the Firebase configuration in `src/firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
netflix-clone/
├── public/               # Static files
│   ├── background_banner.jpg  # Homepage banner
│   └── netflix_favicon.ico    # Favicon
│
├── src/                  # Source code
│   ├── assets/           # Static assets (images, icons)
│   │   └── cards/        # Movie/TV show cards
│   │
│   ├── components/       # Reusable UI components
│   │   ├── Footer/       # Page footer
│   │   ├── Navbar/       # Navigation bar
│   │   └── TitleCards/   # Content cards
│   │
│   ├── pages/            # Page components
│   │   ├── Home/         # Home page
│   │   ├── Login/        # Login/Signup page
│   │   └── Player/       # Video player page
│   │
│   ├── App.jsx           # Main application component
│   ├── firebase.js       # Firebase configuration and services
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
│
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔒 Environment Variables

Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase Hosting:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set `dist` as your public directory
   - Configure as a single-page app: Yes
   - Set up automatic builds and deploys: No

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 🙏 Acknowledgments

- Netflix for the design inspiration
- Firebase for the amazing backend services
- React and Vite teams for the awesome tools


## 🙏 Acknowledgments

- **YouTube** for the inspiration and design patterns
- **React** and **Vite** teams for the amazing development tools
- The open-source community for valuable resources and libraries

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
