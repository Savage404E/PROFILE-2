# SAVAGE Portfolio - Terminal Developer Showcase

A cutting-edge portfolio website featuring a terminal/cyberpunk aesthetic with interactive elements and a unique developer presentation.

![SAVAGE Portfolio](https://via.placeholder.com/800x400/0d1117/00ff41?text=SAVAGE+Portfolio+Terminal)

## 🚀 Unique Features

### Terminal-Inspired Design
- **Terminal Loading Screen**: Boot sequence animation with command-line style initialization
- **Matrix Background**: Animated matrix rain effect for that hacker aesthetic
- **Terminal Windows**: All sections presented as terminal windows with realistic UI
- **Command-Line Interface**: Interactive elements styled as terminal commands

### Interactive Elements
- **Typing Animation**: Dynamic text that types and deletes itself in the hero section
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive cards with matrix-style hover states
- **Progress Animations**: Animated skill bars that fill on scroll
- **Mobile Responsive**: Fully functional on all devices

### Advanced Features
- **Project Filtering**: Dynamic project showcase with status indicators
- **Skills Categories**: Filterable skills by frontend, backend, and tools
- **Contact Form**: Terminal-styled contact form with validation
- **Theme Toggle**: Switch between dark and light themes
- **Social Links**: Integrated social media links in terminal format

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Advanced animations, grid layouts, and custom properties
- **Vanilla JavaScript**: No frameworks - pure JavaScript for all interactions
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: JetBrains Mono and Space Grotesk for that developer aesthetic

## 📁 Project Structure

```
p4/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with terminal theme
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Terminal Green**: #00ff41 (Primary accent)
- **Matrix Green**: #00ff00 (Background effects)
- **Terminal Background**: #0d1117 (Dark terminal theme)
- **Accent Pink**: #ff0080 (Secondary accent)
- **Border Color**: #30363d (Terminal borders)

### Typography
- **JetBrains Mono**: Primary monospace font for terminal feel
- **Space Grotesk**: Modern sans-serif for contrast

### Key Components
- Terminal windows with realistic UI elements
- Matrix rain background effect
- Command-line styled navigation
- Interactive project cards
- Animated skill progress bars
- Terminal-styled contact form

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd profile-website/p4
   ```

2. **Run locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   
   # Or using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

## 🎯 Interactive Features

### Loading Experience
- Terminal boot sequence with realistic command output
- Progressive loading messages
- Smooth fade-out transition

### Navigation System
- Terminal-styled navigation bar
- Smooth scroll to sections
- Active section highlighting
- Mobile hamburger menu with terminal aesthetic

### Hero Section
- Animated typing effect with multiple messages
- Developer information displayed as terminal output
- Hexagonal profile icon with code rain effect
- Status indicator with pulse animation

### Projects Showcase
- Grid layout with terminal-styled cards
- Project status badges (Active, Completed, In Progress)
- Technology tags with terminal styling
- GitHub and demo links
- Hover animations with border effects

### Skills Display
- Category filtering (All, Frontend, Backend, Tools)
- Animated progress bars
- Terminal-styled skill cards
- Responsive grid layout

### Contact Form
- Terminal window design
- Command-line styled form fields
- Form validation and feedback
- Social links integration

## 📱 Responsive Design

The website is fully responsive with:
- **Desktop**: Full terminal experience with all effects
- **Tablet**: Optimized layout with touch interactions
- **Mobile**: Simplified terminal interface with mobile menu

## ⚡ Performance Features

- Optimized animations using CSS transforms
- Efficient JavaScript with async/await patterns
- Lazy loading considerations
- Smooth 60fps animations
- Minimal resource usage

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --terminal-green: #00ff41;
    --terminal-bg: #0d1117;
    --matrix-green: #00ff00;
    /* ... other variables */
}
```

### Modifying Projects
Update the projects array in `script.js`:
```javascript
this.projects = [
    {
        title: 'Your Project',
        description: 'Project description',
        status: 'Active',
        tech: ['Tech1', 'Tech2'],
        github: '#',
        demo: '#'
    }
];
```

### Adding Skills
Update the skills array in `script.js`:
```javascript
this.skills = [
    { name: 'Skill Name', level: 90, category: 'frontend' }
];
```

## 🔧 Browser Support

- Chrome/Chromium (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**SAVAGE**
- Full Stack Developer
- Creative Solutions Architect
- Terminal Enthusiast

---

*Built with passion for code and terminal aesthetics*
