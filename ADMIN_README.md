# Admin Dashboard

A comprehensive admin interface for managing the GroupFund application.

## Features

- **Dashboard**: System-wide statistics and overview
- **Users Management**: View, search, filter, and manage all users
- **Groups Management**: View all groups and their details
- **Transactions**: View all system transactions with filtering
- **Contributions**: View all birthday contributions
- **Notifications**: View all system notifications

## Setup

1. **Environment Variables**

   Create a `.env` file in the `website` directory:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

2. **Start the Development Server**

   ```bash
   cd website
   npm run dev
   ```

3. **Access the Admin Dashboard**

   Navigate to: `http://localhost:5173/admin/login`

## Authentication

1. Login with an admin account (user must have `is_admin = true` in the database)
2. The system will verify admin status and grant access
3. All admin routes are protected and require authentication

## Admin Routes

- `/admin/login` - Admin login page
- `/admin` - Dashboard with system statistics
- `/admin/users` - Users management
- `/admin/groups` - Groups management
- `/admin/transactions` - Transactions view
- `/admin/contributions` - Contributions view
- `/admin/notifications` - Notifications view

## Features by Page

### Dashboard
- Total users, verified users, admins
- Total groups, active groups
- Transaction statistics
- Contribution statistics
- Total wallet balance

### Users Management
- Search users by name, email, or phone
- Filter by verification status and admin status
- View detailed user information
- Update user verification and admin status
- Delete users
- View user groups and transaction count

### Groups Management
- Search groups
- View group details including members
- See contribution amounts and currencies

### Transactions
- Filter by type (credit, debit, contribution, birthday_gift)
- Filter by status (pending, completed, failed)
- View transaction details

### Contributions
- Filter by status (pending, paid, failed)
- View contribution details including birthday user and contributor

### Notifications
- Filter by type and read status
- View all system notifications

## API Integration

The admin dashboard uses the admin API endpoints:
- `GET /api/admin/users` - Get all users
- `GET /api/admin/users/:userId` - Get user details
- `PUT /api/admin/users/:userId` - Update user
- `DELETE /api/admin/users/:userId` - Delete user
- `GET /api/admin/groups` - Get all groups
- `GET /api/admin/transactions` - Get all transactions
- `GET /api/admin/contributions` - Get all contributions
- `GET /api/admin/notifications` - Get all notifications
- `GET /api/admin/stats` - Get system statistics

All requests require authentication with a valid admin JWT token.

