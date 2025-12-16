# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for **3I Digital**, a managed digital presence service for tech founders and small business owners. The website is a single-page application designed to build trust and encourage founders to book a short discovery call.

Key characteristics:
- **Target audience**: Tech startup founders, small to medium business owners (Australian context)
- **Primary goal**: Build trust and make founders feel safe booking a call
- **Tone**: Calm, clear, confident, plain English, no buzzwords, no hype
- **Design**: Minimalist, white/light background, neutral colours, generous whitespace, no animations

## Development Commands

This is a single HTML file project with minimal dependencies:

- No build process required
- Open `index.html` directly in a browser to view
- Uses Tailwind CSS via CDN (no compilation needed)
- No JavaScript frameworks or complex tooling

## Architecture & Structure

### Tech Stack
- **HTML5**: Semantic markup
- **Tailwind CSS**: Via CDN for styling
- **JavaScript**: Minimal/none (only if absolutely required)
- **Mobile responsive**: Built mobile-first

### Page Sections (in order)
The landing page follows this exact structure per `prompt.txt`:

1. **Header / Hero** → Immediate value proposition with primary CTA
2. **Problems We Solve** → 3 short, founder-relevant problems
3. **What We Manage** → Plain list of 5 services
4. **Who It's For / Who It's Not For** → Two columns showing good fit vs not a good fit
5. **How It Works** → Simple 3-step process
6. **About 3I Digital** → Founder-focused explanation
7. **Services (Included / Not Included)** → Two columns clearly separating what's included vs not
8. **Contact** → Simple form with name, email, message + calendar link
9. **Footer** → Minimal with Privacy Policy and Terms placeholder links

### Design Principles

**Visual Design:**
- Minimalist and clean
- White or very light background
- Neutral colour palette (grey, charcoal, muted blue)
- Generous whitespace
- Simple typography (system fonts)
- **NO animations**
- **NO gradients**
- **NO stock imagery**
- **NO icons** unless truly necessary

**Tone & Copy:**
- Calm and clear
- Confident but not arrogant
- Plain English (Australian spelling)
- No buzzwords like "leverage", "synergy", "scale", "growth hacking"
- Short sentences and paragraphs
- Focus on reducing doubt, not persuading
- Founder-to-founder voice

### Content Guidelines

When writing or editing copy:
- Use plain Australian English
- Short sentences and paragraphs
- Prefer clarity over persuasion
- Avoid jargon completely
- Make founders think: "This feels safe, simple, and sensible"
- If it feels like marketing, remove it
- If it adds complexity, remove it
- If it doesn't reduce doubt, remove it

### Key Differentiators to Emphasize

- Small, hands-on team (not a big corporate agency)
- One accountable point of contact
- No fake promises or growth guarantees
- Quiet, reliable management
- Australian owned and operated

## Important Files

- `index.html` - The complete single-page website (self-contained)
- `prompt.txt` - Complete requirements specification
- `css/styles.css` - Not currently used (Tailwind CDN handles styling)
- `js/main.js` - Not currently used (minimal JS approach)

## Notes

- The page is intentionally simple and calm to build trust with sceptical founders
- No tracking or analytics mentioned (keeps it simple)
- Contact form is basic - actual integration would be implemented later
- Calendar booking link is a placeholder
- All emphasis on trust, simplicity, and accountability over growth promises
