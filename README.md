# 🌐 Kavya's Portfolio

Welcome to my personal portfolio website! This portfolio showcases my projects, technical skills, experience, and achievements in **Image Processing, Machine Learning, Deep Learning, Computer Vision, and Remote Sensing**.

---

# Live Demo

**Portfolio:**  
https://kavya-45.github.io/kavya_portfolio/

---

# About

This portfolio is designed to present my professional profile, technical expertise, and research projects through a clean and responsive web interface.

### Features

-  Introduction
-  About Me
-  Professional Experience
-  Technical Skills
-  Projects
-  Contact Information

---

# Built With

- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Tailwind CSS
- Framer Motion

---

# Project Structure

```text
kavya_portfolio/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   └── App.jsx
│
├── docs/
├── dist/
├── package.json
├── vite.config.js
└── README.md
```

---

# Using This Portfolio Template

You're welcome to use this project as a template for your own portfolio.

## Step 1: Clone the Repository

```bash
git clone https://github.com/kavya-45/kavya_portfolio.git
```

Navigate into the project folder:

```bash
cd kavya_portfolio
```

---

## Step 2: Create Your Own GitHub Repository

Create a new repository under your GitHub account (for example, `my-portfolio`).

Once the repository is created, connect your local project to your new GitHub repository:

```bash
git remote remove origin
git remote add origin https://github.com/<your-username>/<your-repository>.git
```

Example:

```bash
git remote add origin https://github.com/john/my-portfolio.git
```

Verify that the remote repository has been updated correctly:

```bash
git remote -v
```

You should see your own GitHub username and repository name in the output.

Example:

```text
origin  https://github.com/john/my-portfolio.git (fetch)
origin  https://github.com/john/my-portfolio.git (push)
```

If everything looks correct, push the project to your repository:

```bash
git push -u origin main
```

> ** Important:** Your local changes will **not** affect my live portfolio. Only users with write access to this repository can publish changes to my website.

---

## Step 3: Update the GitHub Pages Base Path

Open:

```text
vite.config.js
```

Locate:

```javascript
base: '/kavya_portfolio/'
```

Replace it with your repository name.

Example:

Repository:

```text
https://github.com/john/my-portfolio
```

Update to:

```javascript
base: '/my-portfolio/'
```

> ** Don't skip this step.**  
> If the repository name doesn't match the `base` path, your deployed website may display a blank page because the assets will be loaded from the wrong location.

---

## Step 4: Replace Personal Information

Update the portfolio with your own information.

Replace:

- Name
- Profile Photo
- About Section
- Skills
- Experience
- Projects
- Resume
- Contact Information
- GitHub Profile
- LinkedIn Profile
- Email Address
- Social Media Links

---

## Step 5: Install Dependencies

```bash
npm install
```

---

## Step 6: Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

Verify that everything looks correct before building the project.

---

## Step 7: Build for Production

```bash
npm run build
```

This creates the production build inside the `dist` folder.

---

## Step 8: Deploy to GitHub Pages

Copy the generated `dist` folder to `docs`:

### Git Bash

```bash
rm -rf docs
cp -r dist docs
```

Commit the updated files:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

---

## Step 9: Enable GitHub Pages

Go to your repository:

**Settings → Pages**

Configure:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

Click **Save**.

Your portfolio will be available at:

```text
https://<your-username>.github.io/<your-repository>/
```

---

# Support

If you found this project helpful, consider giving it a on GitHub.

---
## Acknowledgements

This portfolio is based on the portfolio template created by **Sadhan Shetty**.

Original GitHub:
https://github.com/sadhanshetty

The project has been customized and extended with my own content, projects, styling, and deployment configuration.
© 2026 Kavya. All rights reserved.
