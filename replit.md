# Overview

This is a full-stack athletic performance tracking application called "Regen & Track" built with a modern TypeScript stack. The application provides comprehensive wellness monitoring, recovery tracking, and performance analytics for serious athletes. The frontend is a React-based landing page showcasing the app's features, while the backend is prepared for API development with database integration for user management and data tracking.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom athletic theme (navy, purple color scheme)
- **State Management**: TanStack React Query for server state management
- **Design Pattern**: Component-based architecture with reusable UI components
- **Layout**: Single-page application with smooth scrolling navigation between sections

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix routing
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and prepared database integration
- **Development**: Hot module replacement via Vite integration
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Schema**: Defined in shared directory for type sharing between client/server
- **Migrations**: Drizzle Kit for database schema management
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle

## Project Structure
- **Monorepo Pattern**: Shared types and schemas in `/shared` directory
- **Client**: React application in `/client` with component-based organization  
- **Server**: Express API in `/server` with modular routing
- **Build Strategy**: Separate builds for client (Vite) and server (esbuild)

## Authentication & User Management
- **User Schema**: Basic username/password authentication structure
- **Session Handling**: Prepared for session management with connect-pg-simple
- **Storage Interface**: CRUD operations for user management (getUser, createUser, getUserByUsername)

# External Dependencies

## UI & Component Libraries
- **Radix UI**: Comprehensive set of accessible component primitives
- **shadcn/ui**: Pre-built component system with customizable variants
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variant management

## Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express

## Development Tools
- **Vite**: Fast build tool with HMR and modern JavaScript features
- **TypeScript**: Static type checking across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing pipeline

## Form & Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **Zod**: Runtime type validation and schema definition

## Utilities & Helpers
- **date-fns**: Modern date utility library
- **clsx/twMerge**: Conditional className utilities
- **nanoid**: Secure URL-friendly unique ID generator