# Bus Management System - Setup Guide

## Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)
- npm or yarn
- Git
- Docker (optional)

## Local Setup

### 1. Clone Repository
```bash
git clone https://github.com/shivamgurjarz/bus-management.git
cd bus-management
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env

# Update .env with your configuration
# Then start the server
npm run dev
```

### 3. Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
npm start
```

The frontend will open at `http://localhost:3000`

## Docker Setup

```bash
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend API on port 5000
- Frontend on port 3000

## Database Setup

### MongoDB Connection String
```
mongoodb://localhost:27017/bus-management
```

### Sample Data
You can use MongoDB Compass or mongosh to import sample data.

## Environment Variables

Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb://localhost:27017/bus-management
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
```

## Testing the API

Use Postman or curl to test endpoints:

```bash
# Get all buses
curl http://localhost:5000/api/buses

# Create a new bus (requires authentication)
curl -X POST http://localhost:5000/api/buses \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"busNumber":"BUS001","busName":"Express Bus","capacity":50}'
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify network connectivity

### Port Already in Use
- Change PORT in .env
- Or kill the process using the port

### Dependencies Installation Issues
- Delete node_modules and package-lock.json
- Run `npm install` again
- Clear npm cache if needed: `npm cache clean --force`
