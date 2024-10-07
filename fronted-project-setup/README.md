frontend/
├── public/ # Static files like HTML, favicon, etc.
│ └── index.html
├── src/ # Source code folder
│ ├── assets/ # Images, fonts, and other static assets
│ │ ├── images/
│ │ └── styles/
│ ├── components/ # Reusable UI components
│ │ ├── Button.tsx
│ │ ├── Header.tsx
│ │ └── Sidebar.tsx
│ ├── features/ # Redux slices, context, or specific feature modules
│ │ ├── auth/
│ │ │ ├── authApi.ts
│ │ │ ├── authSlice.ts
│ │ └── rooms/ # Example for rooms feature
│ │ ├── RoomList.tsx
│ │ ├── RoomDetails.tsx
│ ├── hooks/ # Custom React hooks
│ │ └── useAuth.tsx
│ ├── layouts/ # Layout components for various sections
│ │ ├── MainLayout.tsx
│ │ └── AuthLayout.tsx
│ ├── pages/ # Pages for routes
│ │ ├── Admin/
│ │ │ └── AdminDashboard.tsx
│ │ ├── Faculty/
│ │ │ └── FacultyDashboard.tsx
│ │ └── Student/
│ │ └── StudentDashboard.tsx
│ ├── routes/ # App routing
│ │ └── AppRoutes.tsx
│ ├── services/ # API calls and external services
│ │ └── roomService.ts
│ ├── store/ # Redux store configuration
│ │ └── store.ts
│ ├── types/ # TypeScript types
│ │ └── index.ts
│ ├── utils/ # Utility functions
│ │ └── helpers.ts
│ ├── App.tsx # Main app component
│ └── index.tsx # Entry point of the app
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── .eslintrc.json # Linter configuration
