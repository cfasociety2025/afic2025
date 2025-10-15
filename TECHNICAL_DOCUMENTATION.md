# AfIC 2025 Website - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Development Workflow](#development-workflow)
6. [Updating Content](#updating-content)
7. [Deployment Process](#deployment-process)
8. [Project Structure](#project-structure)
9. [Available Scripts](#available-scripts)
10. [Troubleshooting](#troubleshooting)
11. [Support and Resources](#support-and-resources)

---

## Project Overview

The **AfIC 2025 Website** is a modern, responsive web application built for the Africa Investment Conference. This website showcases event information, speakers, agenda, sponsorship packages, and ticketing details.

### Key Features
- Responsive design optimized for all devices
- Dynamic speaker management
- Event countdown timer
- Integrated analytics
- Optimized performance and SEO
- Automatic deployment pipeline

---

## Technology Stack

### Core Framework
- **Next.js 15.5.4** - A React-based framework for building fast, SEO-friendly web applications
- **React 19.1.0** - JavaScript library for building user interfaces
- **Tailwind CSS 4** - Utility-first CSS framework for styling

### Additional Tools
- **Biome** - Fast code formatter and linter
- **Vercel Analytics** - Web analytics integration
- **Node.js** - JavaScript runtime environment

---

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

### Required Software

1. **Node.js (v18.17 or higher)**
   - Download from: https://nodejs.org/
   - Verify installation: Open terminal/command prompt and run:
     ```bash
     node --version
     ```
   - You should see a version number like `v18.17.0` or higher

2. **npm (comes with Node.js)**
   - Verify installation:
     ```bash
     npm --version
     ```
   - You should see a version number like `9.0.0` or higher

3. **Git**
   - Download from: https://git-scm.com/
   - Verify installation:
     ```bash
     git --version
     ```
   - You should see output like `git version 2.x.x`

4. **Code Editor (Recommended: Visual Studio Code)**
   - Download from: https://code.visualstudio.com/
   - **Why VS Code?**
     - Free and open-source
     - Excellent built-in Git integration
     - Rich ecosystem of extensions
     - IntelliSense for code completion
     - Integrated terminal

### Recommended VS Code Extensions
Install these extensions for the best development experience:
- **ES7+ React/Redux/React-Native snippets** - Code snippets for React
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **Prettier - Code formatter** - Automatic code formatting
- **GitLens** - Enhanced Git capabilities
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags

---

## Getting Started

### Step 1: Clone the Repository from GitHub

1. **Open your terminal/command prompt** (or use VS Code's integrated terminal)

2. **Navigate to where you want to store the project:**
   ```bash
   cd Documents
   # Or any folder where you want to save the project
   ```

3. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/afic.git
   ```
   > Replace `YOUR_USERNAME` with the actual GitHub username or organization name

4. **Navigate into the project folder:**
   ```bash
   cd afic
   ```

### Step 2: Install Dependencies

Once inside the project folder, install all required packages:

```bash
npm install
```

This command will:
- Read the `package.json` file
- Download all necessary dependencies
- Create a `node_modules` folder with all packages
- Generate a `package-lock.json` file (if not already present)

**Wait time:** This may take 2-5 minutes depending on your internet connection.

### Step 3: Run the Development Server

Start the local development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 15.5.4
- Local:        http://localhost:3000
- Ready in 2.5s
```

### Step 4: View the Website

Open your web browser and navigate to:
```
http://localhost:3000
```

You should now see the AfIC 2025 website running locally on your computer!

---

## Development Workflow

### Making Changes

1. **Open the project in VS Code:**
   ```bash
   code .
   ```
   (Run this command from the project root folder)

2. **Make your edits** using the VS Code editor

3. **Save your changes** (Ctrl+S or Cmd+S)

4. **View changes instantly** - The browser will automatically refresh to show your updates (Hot Module Replacement)

### File Organization

```
afic/
├── app/                    # Main application folder
│   ├── components/         # Reusable UI components
│   ├── about/             # About page
│   ├── agenda/            # Agenda page
│   ├── speakers/          # Speakers page
│   ├── sponsorship/       # Sponsorship page
│   ├── tickets/           # Tickets page
│   ├── page.js            # Homepage
│   ├── layout.js          # Main layout wrapper
│   └── globals.css        # Global styles
├── lib/                   # Utility functions and data
│   └── speakersData.js    # Speaker information
├── public/                # Static assets (images, fonts, etc.)
├── package.json           # Project dependencies and scripts
└── next.config.mjs        # Next.js configuration
```

---

## Updating Content

### How to Update Speaker Data

Speaker information is centralized in a single file for easy management.

**Location:** `lib/speakersData.js`

#### Step-by-Step Guide:

1. **Open the file:**
   - Navigate to: `lib/speakersData.js`

2. **Understanding the structure:**
   ```javascript
   {
     id: 1,                    // Unique identifier (number)
     name: "Francis Nasyomba, CFA",
     title: "President",
     company: "CFA Society East Africa",
     image: "https://afic2025.s3.us-east-1.amazonaws.com/5.png",
     bio: "Full biography text here...",
     expertise: [],            // Array of expertise areas
     achievements: [],         // Array of achievements
     social: {
       linkedin: "https://www.linkedin.com/in/...",
       twitter: "https://x.com/..."
     },
     featured: true           // true = shows on homepage, false = shows only on speakers page
   }
   ```

3. **To Add a New Speaker:**
   - Copy an existing speaker object
   - Update the `id` to a unique number (increment from the last ID)
   - Update all fields with the new speaker's information
   - Set `featured: true` to show on homepage, or `false` for speakers page only
   - Add the speaker object to the `speakersData` array

   Example:
   ```javascript
   {
     id: 7,
     name: "Jane Doe, CFA",
     title: "Chief Investment Officer",
     company: "Investment Firm XYZ",
     image: "/jane-doe.png",
     bio: "Jane is an experienced...",
     expertise: ["Portfolio Management", "Risk Analysis"],
     achievements: ["Award 1", "Award 2"],
     social: {
       linkedin: "https://www.linkedin.com/in/janedoe/",
       twitter: "https://x.com/janedoe"
     },
     featured: true
   }
   ```

4. **To Edit an Existing Speaker:**
   - Find the speaker by their `id` or `name`
   - Update the relevant fields
   - Save the file (Ctrl+S or Cmd+S)

5. **To Remove a Speaker:**
   - Find the speaker object
   - Delete the entire object (including the opening `{` and closing `}` and the comma)
   - Save the file

6. **Adding Speaker Images:**
   - Place image files in the `public/` folder
   - Reference them as `/imagename.png` or `/imagename.jpg`
   - OR use external URLs (like AWS S3 links shown in the examples)

#### Important Notes:
- Always maintain unique `id` values
- Ensure proper JSON syntax (commas, quotes, brackets)
- Featured speakers appear on the homepage
- Non-featured speakers appear only on the dedicated speakers page
- After saving, check `http://localhost:3000` to verify changes appear correctly

### Updating Other Content

- **Homepage:** Edit `app/page.js`
- **About Page:** Edit `app/about/page.js`
- **Agenda:** Edit `app/agenda/page.js`
- **Individual Components:** Edit files in `app/components/`
- **Styles:** Edit `app/globals.css` for global styles

### Adding/Updating Images

1. Place images in the `public/` folder
2. Reference them in your code as `/imagename.png`
3. For external images (like AWS S3), use the full URL

---

## Deployment Process

### How Automatic Deployment Works

This project is configured for **continuous deployment** with Vercel:

```
Local Changes → Push to GitHub → Automatic Deployment to Vercel → Live Website Updated
```

### Step-by-Step: Pushing Changes to GitHub

#### 1. Check What Files Have Changed

```bash
git status
```

This shows all modified, added, or deleted files.

#### 2. Stage Your Changes

To stage all changes:
```bash
git add .
```

Or to stage specific files:
```bash
git add lib/speakersData.js
```

#### 3. Commit Your Changes

```bash
git commit -m "Updated speaker information for AfIC 2025"
```

**Best Practices for Commit Messages:**
- Be descriptive but concise
- Use present tense ("Add feature" not "Added feature")
- Examples:
  - "Update speaker bios and images"
  - "Fix navigation menu on mobile devices"
  - "Add new sponsorship packages"

#### 4. Push to GitHub

```bash
git push origin main
```

> **Note:** Replace `main` with your branch name if different (could be `master`)

#### 5. Automatic Deployment Triggered

Once you push to GitHub:
1. **GitHub receives your changes** (usually within seconds)
2. **Vercel detects the push** (through GitHub integration)
3. **Vercel automatically starts building** the updated website
4. **Build completes** (typically 1-3 minutes)
5. **Website goes live** with your changes

### Monitoring Deployment

#### Option 1: Via Vercel Dashboard
1. Go to https://vercel.com/
2. Log in to your account
3. Select the AfIC project
4. View deployment status and logs

#### Option 2: Via GitHub
1. Go to your GitHub repository
2. Click on the "Actions" tab (if enabled)
3. See deployment status

### Deployment Notifications

You should receive:
- Email notifications when deployment starts
- Email notifications when deployment completes (success or failure)
- You can customize these in Vercel settings

### Rollback in Case of Issues

If a deployment causes problems:

1. **Via Vercel Dashboard:**
   - Go to Deployments
   - Find a previous working deployment
   - Click "Promote to Production"

2. **Via Git:**
   ```bash
   git revert HEAD
   git push origin main
   ```
   This will trigger a new deployment with the previous version

---

## Project Structure

### Important Files and Folders

| Path | Purpose |
|------|---------|
| `app/page.js` | Homepage content |
| `app/layout.js` | Main layout (navigation, footer) |
| `app/components/` | Reusable UI components |
| `lib/speakersData.js` | **Speaker data (most commonly edited)** |
| `public/` | Static files (images, fonts) |
| `package.json` | Project dependencies and scripts |
| `next.config.mjs` | Next.js configuration |
| `globals.css` | Global styles |

### Component Files

Each component handles a specific part of the website:

- `Hero.js` - Homepage hero section
- `Speakers.js` - Featured speakers section
- `SpeakersList.js` - Full speakers list
- `AgendaSchedule.js` - Event schedule
- `TicketsList.js` - Ticket options
- `PartnersSponsors.js` - Sponsors display
- `Footer.js` - Website footer
- `Navbar.js` - Navigation menu

---

## Available Scripts

Run these commands from the project root folder:

### Development

```bash
npm run dev
```
- Starts local development server
- Opens on http://localhost:3000
- Hot reload enabled (changes appear instantly)

### Production Build

```bash
npm run build
```
- Creates optimized production build
- Run this to test production behavior locally
- Vercel runs this automatically during deployment

### Start Production Server (Locally)

```bash
npm run start
```
- Starts production server locally
- Must run `npm run build` first
- Use this to test production version before deploying

### Code Quality

```bash
npm run lint
```
- Checks code for errors and style issues
- Uses Biome linter

```bash
npm run format
```
- Automatically formats code
- Ensures consistent code style

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: "npm: command not found"

**Solution:**
- Node.js is not installed or not in your PATH
- Install/reinstall Node.js from https://nodejs.org/
- Restart your terminal after installation

---

#### Issue: Port 3000 Already in Use

**Error message:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
- Another application is using port 3000
- Option 1: Stop the other application
- Option 2: Use a different port:
  ```bash
  npm run dev -- -p 3001
  ```

---

#### Issue: Changes Not Appearing

**Solution:**
1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check if development server is still running
4. Restart development server (Ctrl+C to stop, then `npm run dev`)

---

#### Issue: Module Not Found Error

**Error message:**
```
Error: Cannot find module 'package-name'
```

**Solution:**
- Dependencies not installed properly
- Run:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

#### Issue: Git Push Rejected

**Error message:**
```
! [rejected]        main -> main (non-fast-forward)
```

**Solution:**
- Your local branch is behind the remote branch
- Pull latest changes first:
  ```bash
  git pull origin main
  ```
- Then push:
  ```bash
  git push origin main
  ```

---

#### Issue: Deployment Failed on Vercel

**Solution:**
1. Check Vercel deployment logs for specific error
2. Common causes:
   - Syntax errors in code
   - Missing dependencies
   - Build configuration issues
3. Test locally first:
   ```bash
   npm run build
   ```
4. If build succeeds locally but fails on Vercel, check environment variables in Vercel settings

---

#### Issue: Images Not Displaying

**Solution:**
1. Check image path is correct
2. For local images: ensure they're in `public/` folder
3. For external images: ensure URL is added to `next.config.mjs` under `remotePatterns`
4. Check image file extension matches the path

---

## Support and Resources

### Official Documentation

- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Documentation:** https://vercel.com/docs

### Learning Resources

- **Next.js Tutorial:** https://nextjs.org/learn
- **React Tutorial:** https://react.dev/learn
- **Git Basics:** https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
- **VS Code Tips:** https://code.visualstudio.com/docs

### Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/afic.git

# Install dependencies
npm install

# Start development server
npm run dev

# Check changed files
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your descriptive message"

# Push to GitHub (triggers deployment)
git push origin main

# Pull latest changes
git pull origin main

# Check Node version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## Contact Information

For technical support or questions about the codebase:

- **Repository Issues:** Create an issue on GitHub
- **Vercel Support:** https://vercel.com/support
- **Emergency Contact:** [Add your contact information here]

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025 | Initial website launch |

---

## Security Best Practices

1. **Never commit sensitive data:**
   - API keys
   - Passwords
   - Private tokens

2. **Use environment variables** for sensitive configuration

3. **Keep dependencies updated:**
   ```bash
   npm audit
   npm update
   ```

4. **Review changes before pushing:**
   ```bash
   git diff 
   
   ```

---

## Backup Recommendations

1. **Regular GitHub backups** - Your code is automatically backed up on GitHub
2. **Local backups** - Periodically backup your local repository
3. **Export speaker data** - Keep a backup copy of `lib/speakersData.js`

---

## Conclusion

This documentation covers everything needed to maintain and update the AfIC 2025 website. The most common task will be updating speaker information in `lib/speakersData.js`.

**Basic Workflow Reminder:**
1. Make changes locally
2. Test at http://localhost:3000
3. Commit changes with `git commit`
4. Push to GitHub with `git push`
5. Vercel automatically deploys
6. Website updates live in 1-3 minutes

For any questions not covered here, refer to the official documentation links provided above.

---

**Document Version:** 1.0  
**Last Updated:** October 2025  
**Prepared for:** AfIC 2025 Client Handover

