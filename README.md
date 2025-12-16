# 3I Digital - Managed Digital Presence

A Next.js landing page for 3I Digital, a managed digital presence service for tech founders and small business owners.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 19** components
- Fully responsive design
- Mobile-first approach
- Minimal, trust-building design
- Component-based architecture

## Project Structure

```
3idigital/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   └── favicon.ico      # Favicon
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Problems.tsx     # Problems section
│   ├── WhatWeManage.tsx # Services overview
│   ├── WhoItsFor.tsx    # Target audience
│   ├── HowItWorks.tsx   # Process steps
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Included services
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
├── public/
│   └── images/          # Static images
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Design Principles

- **Minimalist**: Clean, simple, calm design
- **Trust-first**: No hype, no buzzwords
- **Mobile responsive**: Built mobile-first
- **Plain English**: Clear, Australian spelling
- **Founder-focused**: Speaks directly to tech founders

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Migration Notes

This project was migrated from a single HTML file to a modern Next.js application while maintaining:
- All original content and sections
- Design principles and tone
- Responsive behaviour
- Minimal, trust-building approach

The original `index.html` is kept for reference.

## Deployment

### Pre-Deployment Checklist

Before deploying to production, ensure:

- [ ] All images optimised (WebP format with fallbacks)
- [ ] Contact information updated (phone, email in schema.org markup)
- [ ] Social media URLs updated in footer
- [ ] Google Analytics/Tag Manager installed
- [ ] Forms connected to email service or CRM
- [ ] Cookie consent connected to actual cookie management
- [ ] Favicon and app icons added to `/assets/icons/`
- [ ] OG images created and added to `/assets/images/`
- [ ] DNS records configured for domain
- [ ] SSL certificate installed

### Deployment Options

#### Option 1: Static Hosting (Recommended)
Deploy to Netlify, Vercel, or GitHub Pages:

```bash
# Build directory structure
3idigital/
├── index.html
├── css/
├── js/
└── assets/

# Deploy to Netlify
netlify deploy --prod

# Or Vercel
vercel --prod
```

#### Option 2: Traditional Web Hosting
Upload via FTP/SFTP to your web host:
1. Upload all files to public_html or www directory
2. Ensure file permissions are correct (644 for files, 755 for directories)
3. Test all links and forms

#### Option 3: WordPress Integration
If integrating with WordPress:
1. Create custom page template
2. Copy HTML sections into template
3. Enqueue CSS and JS files properly
4. Test mobile responsiveness

### Post-Deployment

After deployment:

1. **Test Everything**
   - [ ] Test on mobile devices (iOS and Android)
   - [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
   - [ ] Test all forms and CTAs
   - [ ] Verify smooth scrolling works
   - [ ] Check cookie consent appears
   - [ ] Validate all links work

2. **SEO Setup**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify schema.org markup with Google Rich Results Test
   - [ ] Set up Google Analytics
   - [ ] Set up Facebook Pixel (if using)
   - [ ] Configure Google Business Profile

3. **Performance Optimisation**
   - [ ] Run Google PageSpeed Insights
   - [ ] Enable gzip compression on server
   - [ ] Set up browser caching headers
   - [ ] Consider CDN for assets (Cloudflare, etc.)

4. **Monitoring**
   - [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
   - [ ] Configure error tracking (Sentry, etc.)
   - [ ] Monitor form submissions
   - [ ] Track conversion rates

## Analytics Setup

### Google Analytics 4

Add to `<head>` before closing tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Recommended Events to Track
- Form submissions
- Button clicks (CTA buttons)
- Section scrolls
- Time on page
- Outbound link clicks

## Form Integration

The audit form and newsletter form need to be connected to a backend service.

### Recommended Services

1. **Netlify Forms** (if using Netlify)
2. **Formspree** - Easy email forwarding
3. **HubSpot** - Full CRM integration
4. **ActiveCampaign** - Email marketing
5. **Mailchimp** - Newsletter management

### Example: Netlify Forms Integration

Add `data-netlify="true"` to forms:

```html
<form class="audit-form" id="audit-form" data-netlify="true" name="audit">
```

## Launch Checklist

### Week Before Launch
- [ ] Complete all content
- [ ] Add all images (optimised)
- [ ] Set up analytics
- [ ] Configure forms
- [ ] Test on multiple devices
- [ ] Run accessibility audit
- [ ] Check SEO elements
- [ ] Spell check all content
- [ ] Get client/stakeholder approval

### Launch Day
- [ ] Deploy to production
- [ ] Verify DNS propagation
- [ ] Test SSL certificate
- [ ] Submit to search engines
- [ ] Share on social media
- [ ] Monitor analytics
- [ ] Check form submissions
- [ ] Monitor server logs

### Week After Launch
- [ ] Review analytics data
- [ ] Check for 404 errors
- [ ] Monitor page speed
- [ ] Review form submissions
- [ ] Collect user feedback
- [ ] Make minor adjustments
- [ ] Create content calendar

## Maintenance

### Regular Tasks

**Weekly:**
- Check form submissions
- Review analytics
- Monitor uptime
- Check for broken links

**Monthly:**
- Update content/blog
- Review performance metrics
- Update packages/services if needed
- Backup website files

**Quarterly:**
- Review and update testimonials
- Update statistics
- Refresh case studies
- Security updates

## Performance Benchmarks

Target metrics:
- **Page Load Time**: < 3 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 3.5 seconds
- **Lighthouse Score**: > 90
- **Mobile Usability**: 100/100

## Security

### Recommended Headers

Configure these headers on your server:

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### SSL/TLS
- Use HTTPS only
- Redirect HTTP to HTTPS
- Use TLS 1.2 or higher
- Consider HSTS header

## Support & Troubleshooting

### Common Issues

**Forms not submitting:**
- Check form action attribute
- Verify email service configuration
- Check browser console for errors

**Animations not working:**
- Verify JavaScript is enabled
- Check for console errors
- Test in different browsers

**Mobile menu not opening:**
- Check JavaScript loaded
- Verify event listeners attached
- Test on actual mobile device

## Resources

- [CLAUDE.md](CLAUDE.md) - Detailed project guidance
- [prompt.txt](prompt.txt) - Complete requirements specification
- [todo.txt](todo.txt) - Development task checklist
- [ACCESSIBILITY.md](ACCESSIBILITY.md) - WCAG 2.1 compliance audit

## Next Steps

1. Review [todo.txt](todo.txt) for completion status
2. Follow deployment checklist above
3. Set up analytics and tracking
4. Connect forms to email service
5. Test thoroughly before launch
6. Follow launch checklist

## License

Proprietary - 3I Digital
# 3i-digital
