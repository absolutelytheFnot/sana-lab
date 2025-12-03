# Sana Lab - Regenerative Design Audit

A landing page for a regenerative design audit tool that helps Product Managers and Startup Founders assess their product's value chain and discover regenerative pathways.

## Overview

This project provides a streamlined assessment tool that generates 3-5 directionally correct "regenerative pathways" for product development, covering:
- Materials assessment
- Packaging evaluation
- Circularity opportunities
- End-of-life planning

## Key Features

✅ **Performance Optimized**
- RequestAnimationFrame-based scroll handling
- Mobile-optimized (parallax disabled on mobile)
- Smooth 60fps animations

✅ **Accessible**
- Full support for `prefers-reduced-motion`
- Video fallback handling
- Semantic HTML with ARIA labels
- Screen reader friendly

✅ **Type Safe**
- Full TypeScript support
- Proper interfaces and type annotations
- Type-safe component props

✅ **Maintainable**
- Reusable components
- Custom hooks for complex logic
- Data-driven rendering
- Clear separation of concerns

## Project Structure

```
src/
├── pages/
│   └── Index.tsx              # Landing page component
├── hooks/
│   └── useScrollParallax.ts   # Optimized scroll parallax hook
├── components/
│   └── ui/
│       └── button.tsx         # Button component
├── assets/
│   └── logo-offwhite.svg      # Logo asset
└── index.css                  # Global styles with motion preferences
```

## Improvements Made

This codebase represents a significant improvement over the original implementation:

1. **Performance**: RAF-based scroll, mobile optimization
2. **Accessibility**: Reduced motion support, error handling
3. **Code Quality**: Extracted components, TypeScript types
4. **Maintainability**: Custom hooks, data-driven rendering

See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for detailed documentation.
See [COMPARISON.md](./COMPARISON.md) for before/after comparison.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Browser Support

- Modern browsers with ES6+ support
- Graceful degradation for older browsers
- Video fallback for unsupported formats
- Motion preferences support

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Helmet** - SEO

## License

Private - All rights reserved