# React Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with React and Vite. Features a clean UI, game state management, and automatic winner detection.

## 🎮 Live Demo

**[Play the game here!](https://mgooood.github.io/learning-react_tic-tac-toe/)**

## ✨ Features

- **Interactive Gameplay**: Click to place X's and O's
- **Player Management**: Editable player names with real-time updates
- **Smart Game Logic**: Automatic winner detection and draw handling
- **Game History**: Complete log of all moves made during the game
- **Responsive Design**: Mobile-first CSS approach for all devices
- **Modern UI**: Clean, accessible interface with smooth interactions

## 🛠️ Tech Stack

- **React 19.1.0** - UI library with hooks for state management
- **Vite 7.0.5** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **GitHub Pages** - Automated deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v22.12.0 or higher recommended)
- npm (v10.8.1 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mgooood/react-tic-tac-toe.git
   cd react-tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/react-tic-tac-toe/`

## 📁 Project Structure

```
src/
├── components/
│   ├── GameBoard.jsx    # 3x3 game grid component
│   ├── GameOver.jsx     # Winner/draw announcement
│   ├── Log.jsx          # Move history display
│   └── Player.jsx       # Player name and turn indicator
├── assets/              # Images and static assets
├── App.jsx              # Main game logic and state management
├── index.css            # Global styles and CSS variables
├── main.jsx             # React app entry point
└── winning-combinations.js  # Game logic constants
```

## 🎯 How to Play

1. **Set Player Names**: Click on "Player 1" or "Player 2" to edit names
2. **Take Turns**: Players alternate placing X's and O's on the grid
3. **Win Condition**: Get three symbols in a row (horizontal, vertical, or diagonal)
4. **New Game**: Click "Rematch!" to start over
5. **View History**: See all moves in the game log on the right

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code analysis
- `npm run deploy` - Build and deploy to GitHub Pages

## 🚀 Deployment

This project uses GitHub Pages for automatic deployment:

1. **Build and Deploy**
   ```bash
   npm run deploy
   ```

2. **Automatic Process**:
   - Builds the project with Vite
   - Creates/updates `gh-pages` branch
   - Deploys to GitHub Pages
   - Available at: `https://mgooood.github.io/react-tic-tac-toe/`

## 🏗️ Architecture Highlights

### State Management
- Uses React's `useState` hook for game state
- Derived state pattern for active player and winner detection
- Immutable state updates for game board and move history

### Component Design
- **Modular Components**: Each UI section is a separate, reusable component
- **Props-Based Communication**: Clean data flow between parent and child components
- **Event Handling**: Efficient click handlers with proper state updates

### Game Logic
- **Winner Detection**: Checks all possible winning combinations after each move
- **Turn Management**: Automatically alternates between players
- **Draw Detection**: Identifies when the board is full with no winner

## 📝 License

This project is part of a React learning course by Maximilian Schwarzmüller.

## 🙏 Acknowledgments

- Built following "React - The Complete Guide" course
- Inspired by the classic Tic-Tac-Toe game
- Modern React patterns and best practices implemented
