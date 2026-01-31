# Frontend – MERN User Management Application

A modern, responsive React application built with Material-UI for managing user information. Features include user listing with search/filter, add/edit forms with validation, detailed user view, and CSV export functionality.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form management
- **Yup** - Schema validation
- **Axios** - HTTP client
- **Notistack** - Notification system

## Features

✅ Responsive design (Mobile & Desktop)  
✅ User listing with pagination  
✅ Search functionality  
✅ Status filter (Active/InActive)  
✅ Add new user form  
✅ Edit existing user  
✅ View user details  
✅ Delete user with confirmation  
✅ Profile image upload with preview  
✅ Export to CSV  
✅ Form validation (client-side)  
✅ Error handling with notifications  
✅ Component-based architecture  
✅ Clean folder structure

## Prerequisites

- Node.js 18+ (recommended)
- npm or yarn
- Backend API running (see backend README)

## Installation & Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the frontend directory:

```bash
cp .env.example .env
```

Update the `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

**For production:**
```env
VITE_API_BASE_URL=https://your-api-domain.com/api
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will open at: `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Application Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── LoadingSpinner.jsx      # Loading indicator
│   │   │   └── ConfirmDialog.jsx       # Confirmation dialog
│   │   ├── layout/
│   │   │   └── Layout.jsx              # App layout with header
│   │   └── users/
│   │       └── UserDetailsCard.jsx     # User details display
│   ├── pages/
│   │   ├── UsersListPage.jsx           # Main listing page
│   │   ├── UserFormPage.jsx            # Add/Edit form page
│   │   └── UserViewPage.jsx            # View details page
│   ├── services/
│   │   ├── api.js                      # Axios instance
│   │   └── userService.js              # API calls
│   ├── utils/
│   │   └── validation.js               # Yup schemas
│   ├── App.jsx                         # Main app component
│   ├── main.jsx                        # Entry point
│   └── index.css                       # Global styles
├── index.html
├── vite.config.js
├── package.json
├── .env.example
└── README.md
```

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Redirect | Redirects to `/users` |
| `/users` | UsersListPage | User listing with search, filter, pagination |
| `/users/add` | UserFormPage | Add new user form |
| `/users/edit/:id` | UserFormPage | Edit existing user form |
| `/users/view/:id` | UserViewPage | View user details |

## Features in Detail

### 1. Users List Page (`/users`)

**Desktop View:**
- Table layout with columns: ID, FullName, Email, Gender, Status, Profile, Action
- Search bar with instant search
- Status filter dropdown
- Add User button
- Export to CSV button
- Pagination controls
- Action menu (View, Edit, Delete)

**Mobile View:**
- Card-based layout
- Responsive search and filters
- Touch-friendly controls
- Optimized for small screens

### 2. User Form Page (`/users/add` or `/users/edit/:id`)

**Features:**
- Form fields: First Name, Last Name, Email, Mobile, Gender (radio), Status (dropdown), Location, Profile Image
- Real-time validation with error messages
- Image preview
- File upload with drag & drop
- Responsive grid layout
- Cancel button to go back

**Validation Rules:**
- First Name: Required, 2-50 characters
- Last Name: Required, 2-50 characters
- Email: Required, valid email format
- Mobile: Required, exactly 10 digits
- Gender: Required, Male/Female
- Status: Required, Active/InActive
- Location: Required, 2-100 characters
- Profile: Optional, image only, max 5MB

### 3. User View Page (`/users/view/:id`)

**Features:**
- Large profile avatar
- User information displayed with icons
- Status badge
- Created/Updated timestamps
- Edit button
- Back to list button
- Clean, card-based layout

### 4. Notifications

Success and error notifications appear in the top-right corner for:
- User created successfully
- User updated successfully
- User deleted successfully
- Status updated successfully
- CSV exported successfully
- Error messages for failed operations

## Component Guidelines

### Reusable Components

1. **Layout** - Wraps all pages with header
2. **LoadingSpinner** - Shows loading state
3. **ConfirmDialog** - Confirmation for delete actions
4. **UserDetailsCard** - Displays user information

### Component Best Practices

- **No inline styles** - All styles use MUI's `sx` prop or styled components
- **Proper componentization** - Logical separation of concerns
- **Consistent naming** - PascalCase for components, camelCase for functions
- **Error boundaries** - Graceful error handling
- **Accessibility** - ARIA labels and semantic HTML

## API Integration

All API calls are in `src/services/userService.js`:

```javascript
getUsers(page, limit, search, status)    // Get users list
getUserById(id)                          // Get single user
createUser(userData)                     // Create new user
updateUser(id, userData)                 // Update user
updateUserStatus(id, status)             // Update status only
deleteUser(id)                           // Delete user
exportToCSV(search, status)              // Export to CSV
```

## Form Validation

Validation schemas are defined in `src/utils/validation.js` using Yup:

- Client-side validation before submission
- Server-side validation errors are also displayed
- Real-time validation feedback
- Accessible error messages

## Responsive Design

### Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

### Responsive Features

- Adaptive layouts (table → cards on mobile)
- Touch-friendly buttons and controls
- Optimized images
- Mobile-first approach

## State Management

- **React Hooks**: useState, useEffect
- **Form State**: React Hook Form
- **Navigation**: React Router
- **Notifications**: Notistack

## Error Handling

1. **Network Errors**: Display user-friendly messages
2. **Validation Errors**: Show field-specific errors
3. **404 Errors**: Redirect to list page
4. **Server Errors**: Display notification with error message

## Development Tips

1. **Hot Reload**: Vite provides instant hot module replacement
2. **Dev Tools**: Use React DevTools extension
3. **API Testing**: Ensure backend is running before starting frontend
4. **Browser Console**: Check for errors and warnings

## Build & Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure environment variables in Netlify dashboard
4. Set up redirects for SPA routing:

Create `public/_redirects`:
```
/*    /index.html   200
```

### Deploy to Vercel

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables
5. Deploy

### Deploy to Heroku

1. Install `serve` package: `npm install --save serve`
2. Add start script in package.json:
```json
"scripts": {
  "start": "serve -s dist -l 3000"
}
```
3. Create `Procfile`:
```
web: npm start
```
4. Deploy to Heroku

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| VITE_API_BASE_URL | Backend API base URL | http://localhost:5000/api |

## Troubleshooting

### API Connection Issues
- Verify backend is running
- Check `VITE_API_BASE_URL` in `.env`
- Ensure CORS is configured in backend

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist && npm run build`
- Check for TypeScript errors

### Image Upload Issues
- Check file size (max 5MB)
- Verify file type (images only)
- Ensure backend upload endpoint is working

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting with React lazy loading
- Image optimization
- Debounced search
- Pagination to limit data load
- Memoization where appropriate

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Focus management

## License

ISC

## Support

For issues or questions, please create an issue in the repository.

