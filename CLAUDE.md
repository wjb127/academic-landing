# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.0 landing page for the Busan Digital Finance & Blockchain Academy (부산 디지털금융·블록체인 아카데미), a professional education program jointly organized by Busan Ilbo, Beon Media, and Xangle.

## Essential Commands

```bash
# Development
npm run dev         # Start development server (usually on port 3000 or 3006)

# Production
npm run build      # Build for production
npm run start      # Run production server

# Code Quality
npm run lint       # Run ESLint checks
```

## Architecture & Key Components

### Page Structure
The application follows a single-page scroll design with the following sections:
- **Navigation**: Fixed header with scroll-based styling changes
- **HeroSection**: Main visual with download CTA for HWP application form
- **AboutSection**: Program overview, requirements, and partner logos
- **CurriculumSection**: Interactive 13-week curriculum viewer with week selector
- **FeaturesSection**: Unique benefits and highlights
- **ApplicationSection**: Contact form and application methods

### Critical Files & Their Purposes
- `/public/부산+디지털금융·블록체인+아카데미+안내문+및+입학원서.hwp`: The actual application form file that users download
- `/lib/supabase.ts`: Supabase client configuration (requires environment variables)
- `/app/api/contact/route.ts`: Handles contact form submissions
- `/app/api/download/route.ts`: Tracks download requests (if Supabase is configured)

### State Management
- Components use local React state with `useState`
- Form submissions are handled individually per component
- Curriculum section has interactive week selection state

### Styling Approach
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design with mobile-first approach
- Gradient-heavy design with blue/indigo color scheme

## Environment Configuration

Required environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=<supabase_project_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase_anon_key>
```

Note: Currently using placeholder values. Real Supabase credentials needed for full functionality.

## Deployment

- Configured for Vercel deployment with `vercel.json`
- Static assets in `/public` are served directly
- HWP file download works without backend configuration

## Important Context

1. **Download Functionality**: The site provides a direct download of an HWP (Korean word processor) file located at `/public/부산+디지털금융·블록체인+아카데미+안내문+및+입학원서.hwp`. This is the primary CTA.

2. **Supabase Integration**: While Supabase is configured, it's not fully implemented. Database operations in API routes are commented out and need actual table creation for:
   - `download_requests` table
   - `inquiries` table

3. **Korean Language**: The entire site is in Korean, targeting Korean business executives and professionals.

4. **Academic Program Details**:
   - Duration: September 16 - December 9, 2025
   - Schedule: Every Tuesday 18:00-21:00
   - Capacity: ~50 participants
   - Tuition: 5.5 million KRW
- 피드백_반영_내역.md