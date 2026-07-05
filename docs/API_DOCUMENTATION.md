# Bus Management System - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Use JWT tokens in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Buses
- `GET /buses` - List all buses
- `GET /buses/:id` - Get bus by ID
- `POST /buses` - Create new bus (Admin)
- `PUT /buses/:id` - Update bus (Admin)
- `DELETE /buses/:id` - Delete bus (Admin)

### Routes
- `GET /routes` - List all routes
- `POST /routes` - Create new route
- `GET /routes/:id/schedules` - Get schedules

### Bookings
- `GET /bookings` - List user bookings
- `POST /bookings` - Create booking
- `GET /bookings/:id` - Get booking details
- `PUT /bookings/:id/cancel` - Cancel booking

### Drivers
- `GET /drivers` - List all drivers
- `POST /drivers` - Add driver
- `PUT /drivers/:id` - Update driver
- `DELETE /drivers/:id` - Remove driver

## Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```
