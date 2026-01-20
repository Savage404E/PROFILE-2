// Terminal Loading Animation
class TerminalLoader {
    constructor() {
        this.loader = document.getElementById('terminalLoader');
        this.bootCommand = document.getElementById('bootCommand');
        this.bootOutput = document.getElementById('bootOutput');
        this.bootMessages = [
            'Initializing system...',
            'Loading portfolio modules...',
            'Compiling projects...',
            'Setting up skills database...',
            'Establishing secure connection...',
            'Ready to launch!'
        ];
        this.currentMessage = 0;
    }

    async start() {
        for (let i = 0; i < this.bootMessages.length; i++) {
            await this.typeMessage(this.bootMessages[i]);
            if (i < this.bootMessages.length - 1) {
                await this.delay(800);
            }
        }
        await this.delay(1000);
        this.hideLoader();
    }

    async typeMessage(message) {
        this.bootCommand.textContent = message;
        this.bootCommand.style.width = '0';
        this.bootCommand.style.overflow = 'hidden';
        this.bootCommand.style.whiteSpace = 'nowrap';
        
        const chars = message.length;
        for (let i = 0; i <= chars; i++) {
            this.bootCommand.style.width = `${i * 8}px`;
            await this.delay(30);
        }
        
        this.bootOutput.innerHTML += `<div class="boot-line">✓ ${message}</div>`;
    }

    hideLoader() {
        this.loader.style.opacity = '0';
        setTimeout(() => {
            this.loader.style.display = 'none';
        }, 500);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Matrix Background Effect
class MatrixBackground {
    constructor() {
        this.canvas = document.getElementById('matrixCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.chars = '01';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }

    animate() {
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.ctx.fillText(char, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Navigation System
class Navigation {
    constructor() {
        this.navContainer = document.getElementById('navContainer');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.menuToggle = document.getElementById('menuToggle');
        this.themeToggle = document.getElementById('themeToggle');
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupActiveSection();
        this.setupMobileMenu();
        this.setupThemeToggle();
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    this.closeMobileMenu();
                }
            });
        });
    }

    setupActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    setupMobileMenu() {
        this.menuToggle.addEventListener('click', () => {
            this.isMenuOpen = !this.isMenuOpen;
            this.toggleMobileMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !this.navContainer.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        if (this.isMenuOpen) {
            navMenu.style.display = 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'rgba(13, 17, 23, 0.98)';
            navMenu.style.flexDirection = 'column';
            navMenu.style.padding = '20px';
            navMenu.style.borderTop = '1px solid var(--terminal-border)';
        } else {
            navMenu.style.display = 'none';
        }
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = 'none';
    }

    setupThemeToggle() {
        this.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = this.themeToggle.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }
}

// Typing Animation
class TypingAnimation {
    constructor() {
        this.typingText = document.getElementById('typingText');
        this.messages = [
            'Hello, I\'m SAVAGE...',
            'A Full Stack Developer...',
            'Creating digital experiences...',
            'Building innovative solutions...',
            'Let\'s create something amazing!'
        ];
        this.currentMessage = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const current = this.messages[this.currentMessage];
        
        if (this.isDeleting) {
            this.typingText.textContent = current.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            this.typingText.textContent = current.substring(0, this.currentChar + 1);
            this.currentChar++;
        }

        let typeSpeed = this.isDeleting ? 50 : 100;

        if (!this.isDeleting && this.currentChar === current.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentMessage = (this.currentMessage + 1) % this.messages.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Projects Data and Rendering
class ProjectsManager {
    constructor() {
        this.projects = [
            {
                title: 'Discord Bot Framework',
                description: 'A comprehensive Discord bot with economy, games, and moderation features built with discord.py. Includes custom commands, user profiles, and clan systems.',
                status: 'Active',
                tech: ['Python', 'discord.py', 'SQLite', 'API'],
                github: 'https://github.com/Savage404E',
                demo: '#'
            },
            {
                title: 'SAVAGE Portfolio P4',
                description: 'A terminal-inspired portfolio website with matrix effects, command-line interface, and interactive elements showcasing developer skills.',
                status: 'Completed',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
                github: 'https://github.com/Savage404E',
                demo: '#'
            },
            {
                title: 'Task Management System',
                description: 'A full-stack task management application with real-time updates, team collaboration features, and intuitive user interface.',
                status: 'In Progress',
                tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
                github: 'https://github.com/Savage404E',
                demo: '#'
            },
            {
                title: 'Weather Dashboard',
                description: 'A weather dashboard with real-time data, forecasts, beautiful visualizations, and location-based weather information.',
                status: 'Completed',
                tech: ['JavaScript', 'API Integration', 'Charts.js', 'CSS3'],
                github: 'https://github.com/Savage404E',
                demo: '#'
            },
            {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
                status: 'Planning',
                tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
                github: 'https://github.com/Savage404E',
                demo: '#'
            },
            {
                title: 'AI Chat Assistant',
                description: 'An intelligent chat assistant powered by machine learning with natural language processing capabilities.',
                status: 'In Progress',
                tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
                github: 'https://github.com/Savage404E',
                demo: '#'
            }
        ];
        this.init();
    }

    init() {
        this.renderProjects();
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        
        this.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${index * 0.1}s`;
            
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-status">${project.status}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link">
                        <i class="fab fa-github"></i>
                        Code
                    </a>
                    <a href="${project.demo}" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        Demo
                    </a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
}

// Skills Data and Filtering
class SkillsManager {
    constructor() {
        this.skills = [
            { name: 'JavaScript', level: 90, category: 'frontend' },
            { name: 'React', level: 85, category: 'frontend' },
            { name: 'Vue.js', level: 75, category: 'frontend' },
            { name: 'HTML5/CSS3', level: 95, category: 'frontend' },
            { name: 'Node.js', level: 85, category: 'backend' },
            { name: 'Python', level: 80, category: 'backend' },
            { name: 'Express.js', level: 80, category: 'backend' },
            { name: 'MongoDB', level: 75, category: 'backend' },
            { name: 'Git', level: 90, category: 'tools' },
            { name: 'Docker', level: 70, category: 'tools' },
            { name: 'AWS', level: 65, category: 'tools' },
            { name: 'Figma', level: 75, category: 'tools' }
        ];
        this.activeCategory = 'all';
        this.init();
    }

    init() {
        this.setupCategoryFilters();
        this.renderSkills();
    }

    setupCategoryFilters() {
        const categories = document.querySelectorAll('.skill-category');
        
        categories.forEach(category => {
            category.addEventListener('click', () => {
                categories.forEach(cat => cat.classList.remove('active'));
                category.classList.add('active');
                this.activeCategory = category.dataset.category;
                this.renderSkills();
            });
        });
    }

    renderSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        skillsGrid.innerHTML = '';
        
        const filteredSkills = this.activeCategory === 'all' 
            ? this.skills 
            : this.skills.filter(skill => skill.category === this.activeCategory);
        
        filteredSkills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.style.animationDelay = `${index * 0.1}s`;
            
            skillCard.innerHTML = `
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: 0%" data-level="${skill.level}"></div>
                </div>
            `;
            
            skillsGrid.appendChild(skillCard);
        });
        
        // Animate progress bars after rendering
        setTimeout(() => {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach(bar => {
                bar.style.width = bar.dataset.level + '%';
            });
        }, 100);
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.formOutput = document.getElementById('formOutput');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        this.showOutput('Sending message...', 'success');
        
        // Simulate form submission (replace with actual endpoint)
        try {
            await this.simulateSubmission(data);
            this.showOutput('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
            this.form.reset();
        } catch (error) {
            this.showOutput('✗ Failed to send message. Please try again.', 'error');
        }
    }

    simulateSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success/failure randomly
                if (Math.random() > 0.2) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    showOutput(message, type) {
        this.formOutput.textContent = message;
        this.formOutput.className = `form-output ${type}`;
        this.formOutput.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                this.formOutput.style.display = 'none';
            }, 5000);
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start terminal loader
    const terminalLoader = new TerminalLoader();
    terminalLoader.start().then(() => {
        // Initialize other components after loading
        new MatrixBackground();
        new Navigation();
        new TypingAnimation();
        new ProjectsManager();
        new SkillsManager();
        new ContactForm();
    });
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            card.style.background = 'rgba(0, 255, 65, 0.02)';
        } else {
            card.style.background = '';
        }
    });
});

// Add smooth reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(card);
    });
});
