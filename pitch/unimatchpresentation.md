---
title: "UniMatch"
subtitle: "Your Next Degree, Simplified"
author: "Camilla Tiraboschi"
exam: "Web Communication 2025"
theme: white
transition: fade
---

## UniMatch 🎓

<img src="../logounimatch.jpg" style="width: 150px; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">

**Your Next Degree, Simplified**

---

## Introduction 🚀

- **Personal Motivation**
  - Searching for a Master’s degree was a confusing and time-consuming process.
  - Information was fragmented across multiple university websites.
  - This experience inspired the idea of a centralized and user-friendly platform.

---

## Concept 💡

- **The Goal**  
  Create a single platform where users can explore, save, and compare Master’s degrees in Italy.

- **Target Audience**  
  Undergraduate students searching for the most suitable next academic step.

- **Key Value**  
  *Simplicity first*: clean design, clear information, and no unnecessary complexity.

---

## Website Structure 🧩

The site is organised into 5 intuitive sections:

1.  **Home** (Landing & Overview) {.fragment}
2.  **About Us** (Mission & Vision) {.fragment}
3.  **Personal Area** (Login & Registration) {.fragment}
4.  **Master's by Region** (Geographical Search) {.fragment}
5.  **Help** (Support & Questions) {.fragment}

---

## Home Page 🏠

- **Hero Section**: Strong visual impact with a clear call to action guiding users into the platform. 
- **Department Exploration**: Grid-based layout to browse Master’s programs by field of study. 
- **Dynamic Elements**: 
    - Carousel showcasing featured universities
    - Three-column highlights: *Explore*, *Save*, *Choose*

---

## About Us 🤝

- **Mission**: To simplify the process of choosing a Master’s degree by centralising academic information in one accessible platform.
- **Vision**: To become a reference point for students navigating the transition from Bachelor’s to Master’s studies in Italy.

---

## Personal Area 👤

- **Functionality**: Allows users to manage their profile and saved universities. 
- **Preferences**: A dedicated page where users can review "Saved" degrees. 
- **Technical Interaction**: Uses JavaScript (Local Storage) to simulate saving data without a backend. 

---

## Master’s by Region 🗺️

- **Concept**: Structured list of Italian regions allowing users to explore universities by geographic area.
- **Visuals**: Clean layout with visual emphasis on regional organisation and readability.
- **User Flow**: Select a region → View available universities → Explore Master’s courses. 

---

## Help & Support 🆘

- **Purpose**: Assist users with navigation or enrollment questions. 
- **Layout**: Clean FAQ style.
- **Contact**: Direct link to support channels. 

---

## Technologies Used 💻

The project is built on a solid foundation of standard web technologies.

- **HTML5**: Semantic structure. {.fragment}
- **CSS3**: Custom styling + Animations. {.fragment}
- **JavaScript**: Interactivity & Logic. {.fragment}
- **Bootstrap 5**: Responsive Grid & Components. {.fragment}
- **Pandoc**: Document conversion. {.fragment}
- **Reveal.js**: HTML Presentation Framework. {.fragment}

---

## HTML5 Structure (Simplified) 🧱

Semantic layout with header, nav, main, section, and footer for clear separation of content.

```html
<!-- Main Layout Structure -->
<header class="hero">...</header>

<nav class="navbar">...</nav>

<main>
    <section class="departments">...</section>
    <section class="three-columns">...</section>
</main>

<footer>...</footer>
```

---

## CSS Inclusion Methods 🎨

Three ways to apply styles:

1.  **External**: Separate `.css` file linked in HTML.
2.  **Internal**: `<style>` block inside HTML head.
3.  **Inline**: `style` attribute directly on elements.

---

## 1. External CSS 📄

Best for consistency and caching. Used in **home.css**.

```html
<!-- In HTML head -->
<link rel="stylesheet" href="home.css">
```

```css
/* In home.css */
.hero {
    background-color: #0d1b4c;
    color: white;
}
```

---

## 2. Internal CSS 📝

Good for single-page specific styles. Used in **regions.html**.

```html
<head>
    <style>
        body {
            background-image: url(regionsbg.png);
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>
```

---

## 3. Inline CSS 🏷️

Good for quick tests or JavaScript dynamic styles.

```html
<h2 class="section-title" style="margin-top: 50px;">
    Contact Us
</h2>
```

---

## JavaScript – Preferences ❤️

Manage saved universities using **localStorage**.

```javascript
/* Saving a Preference */
function savePreference(name) {
    // Get existing preferences or empty list
    let prefs = JSON.parse(localStorage.getItem("universityPreferences")) || [];
    
    // Add only if not already saved
    if (!prefs.includes(name)) {
        prefs.push(name);
        localStorage.setItem("universityPreferences", JSON.stringify(prefs));
        alert(`${name} added!`);
    } else {
        alert("Already saved.");
    }
}
```

---

## JavaScript – User Logic 🔐

Handles simulation of user login using **localStorage**.

```javascript
/* Simple Login Check */
function checkLogin() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    
    // Simulated credential check
    if(email === "user@example.com" && pass === "1234"){
        localStorage.setItem("logged", "true");
        window.location.href = "preferences.html";
    } else {
        showError("Invalid credentials");
    }
}
```

---

## JavaScript – Contact Form 📩

Handles form submission without page reload.

```javascript
/* Contact Form Submission */
document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
    
    event.preventDefault(); // Stop reload
    
    // Show success message
    let msg = document.getElementById("successMessage");
    msg.innerText = "The message has been sent.";
    msg.style.display = "block";
    
    this.reset(); // Clear form
});
```

---

## Bootstrap Integration 🅱️

Using Bootstrap for responsive components.

```html
<!-- Bootstrap CDN Inclusion -->
<link href=".../bootstrap.min.css" rel="stylesheet">
<script src=".../bootstrap.bundle.min.js"></script>

<!-- Simplified Carousel Component -->
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="img1.jpg" class="d-block w-100">
        </div>
    </div>
</div>
```

---

## UI / UX Highlights ✨

- **Aesthetics**: "Glassmorphism" effect for readability. {.fragment}
- **Feedback**: Hover effects (lift + shadow) on cards. {.fragment}
- **Consistency**: Unified color palette (`#0d1b4c` & White). {.fragment}
- **Responsiveness**: Mobile-friendly grid system. {.fragment}

---

## Project Limitations 🚧

- **No Backend**: Data is stored in Local Storage (simulated). {.fragment}
- **Limited Content**: Static examples of degrees. {.fragment}
- **Mock Forms**: Basic validation without real authentication. {.fragment}

---

## Future Developments 🚀

1. **Database Integration**: Real SQL database for courses. {.fragment}
2. **Advanced Search**: Filter by fee, language, ranking. {.fragment}
3. **User Dashboard**: Track application status. {.fragment}

---

## Conclusion 🎯

**UniMatch** demonstrates:

- Clean, modern **User Interface**.
- Solid understanding of **frontend fundamentals**.
- Practical use of **Bootstrap**.
- User-centric approach to a student problem.

---

## Thank You! ❤️

**UniMatch**

