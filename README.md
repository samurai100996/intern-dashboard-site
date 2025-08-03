# 🚀 Intern Dashboard - Full Stack Project

A modern, responsive intern dashboard built with React frontend and Express.js backend. Track your progress, view leaderboards, and unlock rewards with a beautiful UI powered by Tailwind CSS and Framer Motion animations.

## ✨ Features

### Frontend (React)
- **Modern UI/UX** with Tailwind CSS and Framer Motion animations
- **Responsive Design** that works on all devices
- **Login/Signup Page** with beautiful form UI
- **Dashboard Page** displaying:
  - Intern name and referral code
  - Total donations raised
  - Progress tracking with animated progress bars
  - Rewards/Unlockables section with interactive cards
- **Leaderboard Page** showing:
  - Top performing interns
  - Donation statistics
  - Achievement badges
- **Smooth Navigation** with React Router

### Backend (Express.js)
- **RESTful API** with clean endpoints
- **CORS enabled** for cross-origin requests
- **Mock data** for demonstration purposes
- **Health check endpoint** for monitoring

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server with auto-reload

## 📁 Project Structure

```
intern-dashboard-site/
├── backend/
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html     # Main HTML file
│   ├── src/
│   │   ├── components/
│   │   │   └── Navigation.js
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── DashboardPage.js
│   │   │   └── LeaderboardPage.js
│   │   ├── App.js         # Main app component
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles
│   ├── tailwind.config.js # Tailwind configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── package.json       # Frontend dependencies
├── package.json           # Root package.json
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intern-dashboard-site
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend development server (port 3000).

### Manual Setup (Alternative)

If you prefer to set up manually:

1. **Install root dependencies**
   ```bash
   npm install
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Start backend server**
   ```bash
   npm run server
   ```

5. **Start frontend server** (in a new terminal)
   ```bash
   npm run client
   ```

## 🌐 API Endpoints

### Backend Server (Port 5000)

- `GET /api/intern` - Get intern data
  ```json
  {
    "name": "Saurav Shelke",
    "referralCode": "saurav2025",
    "donations": 13400
  }
  ```

- `GET /api/leaderboard` - Get leaderboard data
  ```json
  [
    {
      "name": "Saurav Shelke",
      "donations": 13400,
      "rank": 1
    }
  ]
  ```

- `GET /api/health` - Health check endpoint

## 🎨 Features in Detail

### Login Page
- Beautiful gradient background
- Form validation
- Password visibility toggle
- Loading states with animations
- Remember me functionality

### Dashboard Page
- **Stats Cards**: Display intern name, referral code, and donations
- **Progress Tracking**: Animated progress bar showing goal completion
- **Rewards Section**: Interactive cards showing unlocked/locked rewards
- **Copy to Clipboard**: One-click referral code copying

### Leaderboard Page
- **Ranking System**: Visual indicators for top 3 performers
- **Statistics Summary**: Total participants, donations, and averages
- **Achievement Badges**: Recognition for top performers
- **Responsive Design**: Works perfectly on mobile and desktop

## 🎯 Usage

1. **Start the application** using `npm run dev`
2. **Open your browser** and navigate to `http://localhost:3000`
3. **Login** with any email/password (demo mode)
4. **Explore the dashboard** to see your stats and progress
5. **Check the leaderboard** to see how you rank among peers
6. **Copy your referral code** to share with others

## 🔧 Customization

### Modifying Data
- Edit `backend/server.js` to change mock data
- Update intern information, donation amounts, or leaderboard rankings

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Update `frontend/src/index.css` for global styles
- Customize component styles in individual files

### Adding Features
- Create new components in `frontend/src/components/`
- Add new pages in `frontend/src/pages/`
- Extend API endpoints in `backend/server.js`

## 🚀 Deployment

### Frontend (Vercel) - FREE
1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `frontend`
   - Deploy!

3. **Set Environment Variable**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-railway-backend-url.railway.app`

### Backend (Railway) - FREE
1. **Deploy to Railway**:
   - Go to [railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Set root directory to `backend`
   - Deploy!

2. **Get Backend URL**:
   - After deployment, copy the Railway URL
   - Update the `REACT_APP_API_URL` in Vercel with this URL

### Alternative: Netlify + Render
- **Frontend**: Deploy to Netlify (similar to Vercel)
- **Backend**: Deploy to Render (free tier available)

### Manual Deployment Steps
1. **Backend**: Deploy `backend` folder to Railway/Render
2. **Frontend**: Deploy `frontend` folder to Vercel/Netlify
3. **Connect**: Set environment variable `REACT_APP_API_URL` to your backend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React and Express.js
- Styled with Tailwind CSS
- Animated with Framer Motion
- Icons from Lucide React

---

**Happy Coding! 🎉** 