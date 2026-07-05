# Bus Management System

A comprehensive bus management and online facilities platform for managing bus operations, schedules, bookings, and passenger information.

## Features

- **Bus Fleet Management** - Track and manage bus inventory
- **Route & Schedule Management** - Create and manage bus routes and timetables
- **Online Booking System** - Customers can book tickets online
- **Passenger Management** - Track passenger information and booking history
- **Driver Management** - Manage driver details and assignments
- **Real-time Tracking** - GPS tracking for buses (optional)
- **Payment Integration** - Secure payment processing
- **Admin Dashboard** - Comprehensive management interface
- **Mobile Responsive** - Works on all devices

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Tailwind CSS
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT
- **Deployment**: Docker

## Project Structure

```
bus-management/
├── backend/              # Node.js/Express API server
│   ├── src/
│   │   ├── models/      # Database models
│   │   ├── routes/      # API routes
│   │   ├── controllers/ # Route handlers
│   │   ├── middleware/  # Custom middleware
│   │   └── config/      # Configuration files
│   ├── package.json
│   └── .env.example
├── frontend/            # React application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── services/   # API services
│   │   └── App.jsx
│   └── package.json
├── docs/               # Documentation
├── docker-compose.yml
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB/PostgreSQL
- Git

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your configuration
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Using Docker

```bash
docker-compose up -d
```

## API Endpoints

### Buses
- `GET /api/buses` - List all buses
- `POST /api/buses` - Add new bus
- `PUT /api/buses/:id` - Update bus
- `DELETE /api/buses/:id` - Delete bus

### Routes
- `GET /api/routes` - List all routes
- `POST /api/routes` - Create new route
- `GET /api/routes/:id/schedules` - Get schedules for a route

### Bookings
- `GET /api/bookings` - List bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id/cancel` - Cancel booking

### Drivers
- `GET /api/drivers` - List all drivers
- `POST /api/drivers` - Add new driver

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License - feel free to use this project

## Support

For issues and questions, please open a GitHub issue.
