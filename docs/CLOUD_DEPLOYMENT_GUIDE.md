# Bus Management System - Cloud Deployment Guide

## Prerequisites
- MongoDB Atlas Account (Free cluster available)
- Heroku Account or AWS Account
- Git & GitHub repository
- Credit card for cloud services (some are free tier)

---

## STEP 1: Setup MongoDB Atlas (Real Database)

### 1.1 Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up" → Create account
3. Create free organization

### 1.2 Create a Free Cluster
1. Click "Create a Deployment"
2. Select **M0 (Free)** tier
3. Choose cloud provider (AWS, Google, Azure)
4. Select region closest to you
5. Click "Create Cluster" (takes 5-10 minutes)

### 1.3 Setup Network Access
1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Select "Allow access from anywhere" (0.0.0.0/0) for development
   - For production: Add specific IP addresses
4. Click "Confirm"

### 1.4 Create Database User
1. Go to "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `busadmin`
5. Password: Create a strong password (save it!)
6. Click "Add User"

### 1.5 Get Connection String
1. Go to "Clusters" → Click "Connect"
2. Choose "Connect your application"
3. Select "Node.js" and version "4.0 or later"
4. Copy the connection string:
   ```
   mongodb+srv://busadmin:<password>@cluster0.xxxxx.mongodb.net/bus-management?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. The database name is `bus-management`

---

## STEP 2: Update Environment Variables

### 2.1 Update Backend .env File

**File**: `backend/.env`

```env
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://busadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/bus-management?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=production

# JWT
JWT_SECRET=your_super_secret_key_change_this_in_production_12345
JWT_EXPIRE=7d

# CORS (for frontend)
CLIENT_URL=https://your-frontend-domain.com

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Stripe (Optional for payments)
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_PUBLIC_KEY=your_public_key
```

### 2.2 Test Connection Locally
```bash
cd backend
npm install
npm run dev
```

You should see: `MongoDB connected`

---

## STEP 3: Deploy to Heroku (Recommended for Beginners)

### 3.1 Create Heroku Account
1. Go to https://www.heroku.com
2. Sign up for free account
3. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

### 3.2 Deploy Backend to Heroku

```bash
# Login to Heroku
heroku login

# Create Heroku app for backend
cd backend
heroku create bus-management-api

# Set environment variables on Heroku
heroku config:set MONGODB_URI="mongodb+srv://busadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/bus-management?retryWrites=true&w=majority"
heroku config:set JWT_SECRET="your_super_secret_key"
heroku config:set NODE_ENV="production"
heroku config:set CLIENT_URL="https://your-frontend-domain.vercel.app"

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

**Backend URL**: `https://bus-management-api.herokuapp.com`

### 3.3 Deploy Frontend to Vercel (Recommended)

1. Go to https://vercel.com
2. Sign up with GitHub account
3. Click "New Project"
4. Import your bus-management repository
5. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
6. Add Environment Variable:
   ```
   REACT_APP_API_URL=https://bus-management-api.herokuapp.com/api
   ```
7. Click "Deploy"

**Frontend URL**: `https://bus-management.vercel.app`

---

## STEP 4: Update Frontend to Use Cloud API

### 4.1 Update API Service

**File**: `frontend/src/services/api.js`

```javascript
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
```

---

## STEP 5: Verify Cloud Deployment

### 5.1 Test Backend API
```bash
curl https://bus-management-api.herokuapp.com/api/buses
```

Expected Response:
```json
{
  "message": "Get all buses"
}
```

### 5.2 Test Frontend
1. Open browser
2. Go to `https://bus-management.vercel.app`
3. You should see the Bus Management UI
4. Try booking a bus

---

## STEP 6: Alternative: Deploy to AWS

### Option A: AWS EC2 + RDS

**Pros**: Full control, cost-effective for scaling

**Cost**: ~$10-20/month

1. Create EC2 instance (Ubuntu 20.04)
2. Create RDS instance for MongoDB (or use MongoDB Atlas)
3. SSH into EC2 and clone repository
4. Install Node.js and npm
5. Configure environment variables
6. Use PM2 for process management

### Option B: AWS Elastic Beanstalk

**Pros**: Easy deployment, auto-scaling

**Cost**: Pay as you go (~$5-50/month)

```bash
# Install EB CLI
pip install awsebcli

# Initialize Elastic Beanstalk
eb init -p node.js-18 bus-management

# Create environment
eb create bus-management-env

# Deploy
eb deploy

# View URL
eb open
```

---

## Quick Deployment Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Create MongoDB Atlas Account | 5 min |
| 2 | Create Free Cluster | 10 min |
| 3 | Update .env with connection string | 2 min |
| 4 | Create Heroku Account & Deploy Backend | 10 min |
| 5 | Create Vercel Account & Deploy Frontend | 5 min |
| **Total** | | **~32 minutes** |

---

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution**: 
- Check IP whitelist in MongoDB Atlas
- Verify username and password
- Check connection string format

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**:
- Update `CLIENT_URL` in backend .env
- Add frontend URL to CORS whitelist

### Heroku App Crashes
```
Application error
```
**Solution**:
- Check logs: `heroku logs --tail`
- Verify environment variables
- Check MongoDB connection

---

## Final Deployed URLs

```
🌐 Frontend:  https://bus-management.vercel.app
🔌 Backend:   https://bus-management-api.herokuapp.com/api
📊 Database:  MongoDB Atlas Cluster
📦 GitHub:    https://github.com/shivamgurjarz/bus-management
```

**Your project is now ready for cloud deployment!** 🎉
