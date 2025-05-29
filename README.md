## 🚀 Features

- Next.js 15 with App Router
- TypeScript support
- Ethers.js v6 integration
- Reown AppKit integration
- Modern React 19
- ESLint configuration
- Environment variable support


1. Install dependencies:
```bash
pnpm install
```

2. Configure environment variables:
   - Go to [Reown Cloud](https://cloud.reown.com) and create a new project
   - Copy your `Project ID`
   - Create a `.env` file in the root directory
   - Add your Project ID: `NEXT_PUBLIC_PROJECT_ID=your_project_id`

## 🏃‍♂️ Development

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build the application for production:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## 📚 Project Structure

```
src/
├── app/          # Next.js app router pages
├── components/   # React components
├── config/       # Configuration files
├── constants/    # Constants and enums
├── context/      # React context providers
└── hooks/        # Custom React hooks
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
