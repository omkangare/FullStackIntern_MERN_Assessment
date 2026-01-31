# Backend – MERN User Management Application

A RESTful API built with Express.js, MongoDB, and Node.js for managing user information with full CRUD operations, search functionality, pagination support, and CSV export capabilities.

## Tech Stack

- **Express.js** - Web framework (ES Module)
- **MongoDB & Mongoose** - Database and ODM
- **Joi** - Request validation
- **Multer** - File upload middleware for profile images
- **csv-stringify** - CSV export functionality
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Features

✅ Full CRUD operations (Create, Read, Update, Delete)  
✅ Pagination support for listing users  
✅ Search functionality across multiple fields  
✅ Status filter (Active/InActive)  
✅ Profile image upload with validation  
✅ Export users to CSV format  
✅ Field validations (backend + frontend compatible)  
✅ Error handling with meaningful messages  
✅ RESTful API design

## Prerequisites

- Node.js 18+ (recommended)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation & Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user_management
NODE_ENV=development
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/user_management?retryWrites=true&w=majority
```

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start at: `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /health
```
Returns server status

### User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users with pagination & search |
| GET | `/api/users/:id` | Get single user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user (all fields) |
| PATCH | `/api/users/:id/status` | Update user status only |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/users/export/csv` | Export users to CSV |

### API Request Examples

#### Get Users with Pagination
```bash
GET /api/users?page=1&limit=10&search=john&status=Active
```

Query Parameters:
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `search` (string): Search term (searches in firstName, lastName, email, location)
- `status` (string): Filter by status ('Active' or 'InActive')

Response:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10
  }
}
```

#### Create User
```bash
POST /api/users
Content-Type: multipart/form-data

Body:
- firstName: "John"
- lastName: "Doe"
- email: "john@example.com"
- mobile: "1234567890"
- gender: "Male"
- status: "Active"
- location: "New York"
- profile: [File]
```

#### Update User Status
```bash
PATCH /api/users/:id/status
Content-Type: application/json

{
  "status": "InActive"
}
```

#### Export to CSV
```bash
GET /api/users/export/csv?search=john&status=Active
```

## Validation Rules

### User Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| firstName | String | Yes | 2-50 characters |
| lastName | String | Yes | 2-50 characters |
| email | String | Yes | Valid email format, unique |
| mobile | String | Yes | Exactly 10 digits |
| gender | String | Yes | 'Male' or 'Female' |
| status | String | Yes | 'Active' or 'InActive' |
| location | String | Yes | 2-100 characters |
| profile | File | No | Image only (jpeg/jpg/png/gif), max 5MB |

## Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   └── userController.js    # Business logic
├── middleware/
│   ├── upload.js            # Multer configuration
│   └── errorHandler.js      # Error handling
├── models/
│   └── User.js              # User schema
├── routes/
│   └── userRoutes.js        # API routes
├── validators/
│   └── userValidator.js     # Joi validation schemas
├── uploads/                 # Uploaded profile images
├── server.js                # Entry point
├── package.json
├── .env.example
└── README.md
```

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error message",
  "errors": ["Detailed error 1", "Detailed error 2"]
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## File Upload

Profile images are stored in the `uploads/` directory and served statically at `/uploads/:filename`.

Access uploaded images:
```
http://localhost:5000/uploads/profile-1234567890-123456789.jpg
```

## Development Tips

1. **Auto-reload**: Use `npm run dev` with nodemon for automatic server restart
2. **MongoDB**: Ensure MongoDB is running before starting the server
3. **Testing**: Use Postman or Thunder Client for API testing
4. **Logs**: Check console for error messages and connection status

## Deployment Recommendations

### For Heroku:
1. Set environment variables in Heroku dashboard
2. Use MongoDB Atlas for database
3. Add `engines` in package.json:
```json
"engines": {
  "node": "18.x",
  "npm": "9.x"
}
```

### For Render/Railway:
1. Configure build command: `npm install`
2. Configure start command: `npm start`
3. Set environment variables in dashboard
4. Add persistent storage for uploads (or use cloud storage like S3)

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/user_management |
| NODE_ENV | Environment mode | development/production |

## Troubleshooting

### MongoDB Connection Issues
- Check if MongoDB is running: `mongod --version`
- Verify connection string in `.env`
- For Atlas, check network access and user permissions

### File Upload Issues
- Ensure `uploads/` directory has write permissions
- Check file size limit (max 5MB)
- Verify MIME type restrictions

### CORS Issues
- Update CORS configuration in `server.js` if needed
- Add specific origins for production

## License

ISC

