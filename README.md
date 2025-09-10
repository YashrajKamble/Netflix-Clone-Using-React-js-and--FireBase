# 🎬 YouTube Clone - React.js

A modern, responsive YouTube clone built with React.js that replicates the core functionality of the YouTube platform. This project demonstrates frontend development skills using modern web technologies and follows best practices in React development.

![YouTube Clone Preview](./src/assets/YouTube_icon.png)

## 🌟 Features

- **Responsive Layout**: Fully responsive design that works seamlessly across all device sizes
- **Video Feed**: Browse videos in an intuitive grid layout with thumbnails and metadata
- **Video Player**: Watch videos with a custom-built player featuring essential controls
- **Navigation**: Smooth navigation between different sections of the application
- **Search Functionality**: Find videos quickly with the search feature
- **Category Filtering**: Filter content by different categories

## 🛠️ Tech Stack

### Core Technologies
- **React 18+** - Frontend JavaScript library
- **Vite** - Next generation frontend tooling
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **CSS3** - Styling with modern features like Flexbox and Grid

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (v8 or later) or yarn
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashrajKamble/YouTube-Clone-By-React-JS.git
   cd YouTube-Clone-By-React-JS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
youtube-clone/
├── public/            # Static files
│   └── favicon.ico    # Favicon
│
├── src/               # Source code
│   ├── assets/        # Static assets (images, icons)
│   │
│   ├── Components/    # Reusable UI components
│   │   ├── Feed/      # Video feed components
│   │   ├── Navbar/    # Navigation bar
│   │   ├── PlayVideo/ # Video player components
│   │   ├── Recommended/ # Recommended videos
│   │   └── Sidebar/   # Side navigation
│   │
│   ├── Pages/         # Page components
│   │   ├── Home/      # Home page
│   │   └── Video/     # Video detail page
│   │
│   ├── App.jsx        # Main application component
│   ├── data.js        # Sample video data
│   └── main.jsx       # Application entry point
│
├── .gitignore         # Git ignore file
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

<!-- ## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

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
