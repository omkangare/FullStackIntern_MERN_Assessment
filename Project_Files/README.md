# Full Stack Intern (MERN) Assessment – User Management System

A complete **MERN Stack** (MongoDB + Express + React + Node.js) application for managing user information. This project demonstrates full-stack development skills including RESTful API design, responsive UI, form validation, file uploads, and data export functionality.

## 🎯 Project Overview

This application fulfills all requirements of the MERN Stack Intern Assessment:

### ✅ Backend Features
- Complete CRUD API for user information
- Pagination support for efficient data loading
- Search functionality across multiple fields
- Export to CSV functionality
- File upload for profile images
- Joi validation on all inputs
- Proper error handling and responses

### ✅ Frontend Features
- Responsive design (Mobile & Desktop)
- Field validation with user-friendly error messages
- Three distinct pages: List View, Add/Edit Form, View Details
- Multiple routing with React Router
- Component-based architecture
- Clean file structure
- Success/failure notifications

### ✅ Code Quality
- No inline styles
- Proper componentization
- Consistent naming conventions
- Clean folder structure (BE & FE)
- Comprehensive error handling

## 📸 Screenshots

The application matches the provided design specifications with:
1. **Table Screen**: User listing with search, filters, and actions
2. **Form Screen**: Add/Edit user details with validation
3. (Bonus) **View Screen**: Detailed user information display

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd FullStackIntern_MERN_Assessment
```

### 2. Setup Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI
npm install
npm run dev
```
Backend runs at: `http://localhost:5000`

### 3. Setup Frontend
```bash
cd ../frontend
cp .env.example .env
# Ensure VITE_API_BASE_URL points to backend
npm install
npm run dev
```
Frontend runs at: `http://localhost:3000`

### 4. Access Application
Open browser and navigate to: `http://localhost:3000`

## 📁 Project Structure

```
FullStackIntern_MERN_Assessment/
├── backend/                    # Express + MongoDB backend
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── controllers/
│   │   └── userController.js  # Business logic
│   ├── middleware/
│   │   ├── upload.js          # Multer file upload
│   │   └── errorHandler.js    # Error handling
│   ├── models/
│   │   └── User.js            # Mongoose schema
│   ├── routes/
│   │   └── userRoutes.js      # API endpoints
│   ├── validators/
│   │   └── userValidator.js   # Joi validation
│   ├── server.js              # Entry point
│   ├── package.json
│   └── README.md
│
├── frontend/                   # React + Vite + MUI frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/        # Reusable components
│   │   │   ├── layout/        # Layout components
│   │   │   └── users/         # User components
│   │   ├── pages/
│   │   │   ├── UsersListPage.jsx    # Table view
│   │   │   ├── UserFormPage.jsx     # Add/Edit form
│   │   │   └── UserViewPage.jsx     # Details view
│   │   ├── services/
│   │   │   ├── api.js         # Axios config
│   │   │   └── userService.js # API calls
│   │   ├── utils/
│   │   │   └── validation.js  # Yup schemas
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
└── README.md                   # This file
```

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Joi** - Request validation
- **Multer** - File upload middleware
- **csv-stringify** - CSV export
- **CORS** - Cross-origin support

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Material-UI** - Component library
- **React Router DOM** - Routing
- **React Hook Form** - Form management
- **Yup** - Validation schema
- **Axios** - HTTP client
- **Notistack** - Notifications

## 🔑 Key Features

### 1. User Management
- ✅ Create new users with profile images
- ✅ View all users in a paginated table
- ✅ Search users by name, email, or location
- ✅ Filter users by status (Active/InActive)
- ✅ Edit existing user information
- ✅ Delete users with confirmation
- ✅ Update user status with dropdown

### 2. Responsive Design
- 📱 Mobile-optimized card layout
- 💻 Desktop table layout
- 🎨 Adaptive UI components
- ✨ Touch-friendly controls

### 3. Form Validation
- ✅ Client-side validation (Yup)
- ✅ Server-side validation (Joi)
- ✅ Real-time error feedback
- ✅ Field-specific error messages

### 4. File Upload
- 📷 Profile image upload
- 👁️ Image preview before submission
- ⚡ File size and type validation
- 💾 Secure server-side storage

### 5. Data Export
- 📊 Export user list to CSV
- 🔍 Export with applied filters
- 💼 Professional CSV formatting

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users (with pagination & search) |
| GET | `/api/users/:id` | Get single user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| PATCH | `/api/users/:id/status` | Update user status |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/users/export/csv` | Export users to CSV |

## 🎨 Application Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Redirect | Redirects to `/users` |
| `/users` | List Page | View all users with search/filter |
| `/users/add` | Form Page | Add new user |
| `/users/edit/:id` | Form Page | Edit existing user |
| `/users/view/:id` | View Page | View user details |

## ⚙️ Configuration

### Backend Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user_management
NODE_ENV=development
```

### Frontend Environment Variables
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## 🧪 Testing the Application

1. **Start both backend and frontend** as described in Quick Start
2. **Add a new user** via the "Add User" button
3. **Search for users** using the search bar
4. **Filter by status** using the status dropdown
5. **View user details** by clicking the View action
6. **Edit user** by clicking the Edit action
7. **Delete user** by clicking Delete (with confirmation)
8. **Export data** by clicking "Export To Csv"

## 📦 Deployment

### Backend Deployment (Heroku/Render/Railway)

1. **Set environment variables**:
   - `MONGODB_URI` - MongoDB Atlas connection string
   - `PORT` - Server port (usually auto-set)
   - `NODE_ENV=production`

2. **Deploy**:
   ```bash
   # For Heroku
   heroku create your-app-name
   git push heroku main
   ```

### Frontend Deployment (Netlify/Vercel)

1. **Build the project**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy `dist/` folder** to Netlify or Vercel

3. **Set environment variable**:
   - `VITE_API_BASE_URL` - Your backend API URL

4. **Configure redirects** for SPA routing (create `public/_redirects`):
   ```
   /*    /index.html   200
   ```

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Start MongoDB service
mongod
# Or use MongoDB Atlas connection string
```

### Port Already in Use
```bash
# Change PORT in backend/.env
PORT=5001
```

### CORS Issues
```bash
# Update CORS configuration in backend/server.js
# Add your frontend URL to allowed origins
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Validation Rules

| Field | Validation |
|-------|-----------|
| First Name | Required, 2-50 chars |
| Last Name | Required, 2-50 chars |
| Email | Required, valid email, unique |
| Mobile | Required, exactly 10 digits |
| Gender | Required, Male/Female |
| Status | Required, Active/InActive |
| Location | Required, 2-100 chars |
| Profile | Optional, image only, max 5MB |

## 🤝 Development Best Practices

### Code Style
- ✅ No inline styles - using MUI `sx` prop
- ✅ Component-based architecture
- ✅ Clear naming conventions
- ✅ Modular file structure
- ✅ Error handling everywhere

### Git Workflow
```bash
# Feature branch
git checkout -b feature/user-management
# Commit with meaningful messages
git commit -m "Add user CRUD operations"
# Push and create PR
git push origin feature/user-management
```

## 📚 Documentation

- [Backend README](./backend/README.md) - Detailed backend documentation
- [Frontend README](./frontend/README.md) - Detailed frontend documentation

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- RESTful API design and implementation
- MongoDB database modeling
- React component architecture
- Form handling and validation
- File upload functionality
- Responsive web design
- Error handling and user feedback
- Code organization and best practices

## 📄 License

ISC

## 👤 Author

**Your Name**
- Assessment for: Full Stack Intern (MERN) Position

## 🙏 Acknowledgments

- Material-UI for the component library
- MongoDB for the database
- React team for the amazing framework

---

**Note**: This project was created as part of the MERN Stack Intern Assessment. It demonstrates full-stack development capabilities including API design, database management, responsive UI, and modern development practices.
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## Environment Variables

### Backend (`backend/.env`)

- `PORT` (default: 5000)
- `MONGODB_URI` (default: mongodb://localhost:27017/mern_intern_assessment)
- `CORS_ORIGIN` (default: http://localhost:5173)
- `UPLOAD_DIR` (default: uploads)

### Frontend (`frontend/.env`)

- `VITE_API_BASE_URL` (default: http://localhost:5000)

---

## Features

### Backend
- Create User (supports profile image upload)
- List Users with pagination + status filter + search
- Update User (supports profile image update)
- Update Status (Active/InActive)
- Delete User
- Export filtered results to CSV

### Frontend
- Users listing page with:
  - Search bar
  - Status filter
  - Add User button
  - Export CSV button
  - Inline status change
  - Action menu (View/Edit/Delete)
  - Pagination
- Add/Edit form page:
  - Validations
  - Profile image preview
- View details page:
  - Read-only details page (simple UI)

---

## API Documentation (Backend)

Base URL: `http://localhost:5000`

### 1) Create User
`POST /api/users`

- Content-Type: `multipart/form-data`
- Form fields:
  - firstName, lastName, email, mobile, gender (M/F/O), status (Active/InActive), location
  - profile (optional image)

### 2) List Users (pagination + search)
`GET /api/users?page=1&limit=10&q=test&status=Active`

Response includes:
- `data`: list of users
- `meta`: page, limit, total, totalPages

### 3) Get User By ID
`GET /api/users/:id`

### 4) Update User
`PUT /api/users/:id` (multipart/form-data)

### 5) Update Status
`PATCH /api/users/:id/status`
```json
{ "status": "Active" }
```

### 6) Delete User
`DELETE /api/users/:id`

### 7) Export CSV
`GET /api/users/export/csv?q=test&status=Active`

---

## Deployment Notes (Netlify + Render/Heroku)

### Frontend (Netlify)
- Build command: `npm run build`
- Publish directory: `dist`
- Add env var: `VITE_API_BASE_URL=<YOUR_BACKEND_URL>`

### Backend (Render / Railway / Heroku)
- Add env vars from `.env`
- Ensure MongoDB URI points to Atlas or hosted MongoDB
- Persistent storage not guaranteed on some hosts: prefer storing profile images in an object store (S3) in production.

---

## Screens
- `/users` - List table view
- `/users/add` - Add user
- `/users/:id/edit` - Edit user
- `/users/:id/view` - View user details

---

## Notes
- This project uses a MongoDB **text index** over fields: firstName, lastName, email, mobile, location.
- Image uploads are stored under `backend/uploads` and served at `/uploads/<filename>`.

