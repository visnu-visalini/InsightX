# InsightX Resume Optimizer - Setup Guide

## 🚀 Features
- **AI-Powered Resume Optimization** with OpenAI GPT-4
- **ATS Score & Job Match Percentage** calculation
- **Key Skills Highlighting** based on job description
- **History Tracking** with MongoDB Atlas
- **PDF Export** of optimized resumes
- **Sidebar Interface** for seamless browsing experience

## 📋 Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- OpenAI API key
- Chrome browser

## 🔧 Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (Free tier is sufficient)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string
7. Replace `<username>`, `<password>`, and cluster URL in `.env` file

### 3. Update .env File
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/insightx?retryWrites=true&w=majority
```

### 4. Start Backend Server
```bash
npm start
# or for development with auto-reload
npm run dev
```

Server will run on `http://localhost:5000`

## 🎨 Chrome Extension Setup

### 1. Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select the `extensions` folder from this project
5. The InsightX extension should now appear in your extensions list

### 2. Open Sidebar

1. Click the InsightX extension icon in Chrome toolbar
2. The sidebar will open on the right side of your browser
3. You can now use the extension while browsing job postings!

## 📖 How to Use

### Optimize Resume
1. **Upload Resume**: Click or drag-and-drop your resume (PDF, DOC, DOCX)
2. **Fetch Job Description**: Navigate to a job posting and click "Fetch from Current Page"
3. **Optimize**: Click "Optimize Resume" to get AI-powered analysis
4. **View Results**: See ATS score, job match %, key skills, and optimized content
5. **Download**: Export optimized resume as PDF

### View History
1. Click the "History" tab in the sidebar
2. View all your previous resume optimizations
3. Click any history item to view full details
4. Track your progress across different job applications

## 🗄️ Database Schema

### History Collection
```javascript
{
  jobTitle: String,
  company: String,
  jobDescription: String,
  resumeFileName: String,
  atsScore: Number (0-100),
  matchScore: Number (0-100),
  skills: [String],
  optimizedResume: String,
  createdAt: Date
}
```

## 🔒 Security Notes
- Never commit `.env` file with real credentials
- Keep your OpenAI API key secure
- Use MongoDB Atlas IP whitelist for production
- Enable MongoDB authentication

## 🐛 Troubleshooting

### Backend won't start
- Check if MongoDB URI is correct
- Verify OpenAI API key is valid
- Ensure port 5000 is not in use

### Extension not loading
- Check if manifest.json is valid
- Ensure all files are in extensions folder
- Try reloading the extension

### Can't fetch job description
- Make sure you're on a job posting page
- Check if the page has loaded completely
- Try refreshing the page

## 📦 Project Structure
```
Insightx/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── models/
│   │   │   └── History.js
│   │   └── server.js
│   ├── .env
│   └── package.json
├── extensions/
│   ├── sidebar.html
│   ├── sidebar.css
│   ├── sidebar.js
│   └── manifest.json
└── README.md
```

## 🎯 API Endpoints

### POST /analyze
Analyze and optimize resume
- Body: FormData with `resume` file, `jobDescription`, `jobTitle`, `company`
- Returns: Analysis results with scores and optimized content

### GET /history
Get all history entries
- Returns: Array of history items (limited to 50)

### GET /history/:id
Get single history entry
- Returns: Full history item with all details

## 💡 Tips
- Use detailed job descriptions for better optimization
- Review the optimized content before using it
- Track your ATS scores to improve over time
- Keep your resume updated in the system

## 🤝 Support
For issues or questions, please check the troubleshooting section or create an issue in the repository.
