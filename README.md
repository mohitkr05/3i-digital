# 3I Digital - Landing Page

A professional landing page for 3I Digital, a managed digital presence agency serving Australian businesses.

## Project Structure

```
3idigital/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet with design system
├── js/
│   └── main.js             # Main JavaScript file
├── assets/
│   ├── images/             # Image assets (logos, photos, screenshots)
│   ├── icons/              # Icon assets (SVG preferred)
│   └── fonts/              # Custom fonts (currently using Google Fonts)
├── CLAUDE.md               # Project instructions for Claude Code
├── prompt.txt              # Complete requirements specification
├── todo.txt                # Development task checklist
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Local development server (optional but recommended)

### Local Development

1. **Clone or download the project**

2. **Open with a local server** (recommended):

   Using Python:
   ```bash
   python -m http.server 8000
   ```

   Using Node.js (with `http-server`):
   ```bash
   npx http-server
   ```

   Using VS Code Live Server extension:
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Or simply open index.html** directly in your browser (some features may not work without a server)

## Design System

The project uses a predefined design system with CSS variables:

### Colors
- **Primary (Navy Blue)**: `#1a365d`
- **Secondary (Teal)**: `#0891b2`
- **Accent (Orange)**: `#ea580c`
- **Success (Green)**: `#16a34a`

### Typography
- **Headings**: Inter (Google Fonts)
- **Body**: Open Sans (Google Fonts)

### Responsive Breakpoints
- Mobile: `≤ 768px`
- Tablet: `769px - 1024px`
- Desktop: `≥ 1025px`

## Features

### Implemented
- ✅ Project structure with organized directories
- ✅ Base HTML template with meta tags and SEO setup
- ✅ CSS design system with variables
- ✅ JavaScript utilities for forms, animations, and interactions
- ✅ Mobile-first responsive foundation

### To Be Implemented
- Hero section with primary CTA
- All 12 page sections (see CLAUDE.md)
- Free Digital Audit form with validation
- Sticky navigation with scroll effects
- Scroll animations and parallax effects
- Cookie consent banner
- WCAG 2.1 AA accessibility compliance
- Performance optimisation (lazy loading, WebP images)

## Development Guidelines

### Australian Spelling
Use Australian English throughout user-facing content:
- "optimisation" not "optimization"
- "colour" not "color"
- "centre" not "center"

### Accessibility
- Maintain WCAG 2.1 Level AA compliance
- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain sufficient colour contrast ratios

### Performance
- Lazy load images
- Use WebP format with fallbacks
- Minify CSS/JS for production
- Inline critical CSS
- Use async/defer for scripts

### Content Tone
- Client-outcome focused (use "you/your")
- Professional but approachable
- Confident without being arrogant
- Avoid jargon or explain technical terms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

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
