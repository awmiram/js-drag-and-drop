# JS Drag and Drop

A lightweight, reusable vanilla JavaScript library for implementing drag-and-drop list reordering with HTML5 Drag and Drop API. Supports RTL layouts and zero external dependencies.

---

## 📊 Status Badges

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![Browser Support](https://img.shields.io/badge/browsers-Chrome%2090%2B%20%7C%20Firefox%2088%2B%20%7C%20Safari%2014%2B-blue)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Author](#author)

---

## ✨ Features

- **HTML5 Drag and Drop API** – Native browser drag-and-drop implementation
- **Reusable Class** – Plug-and-play `Draggable` class for any list element
- **RTL Support** – Full right-to-left language support with Vazirmatn font
- **Zero Dependencies** – Vanilla JavaScript, no external libraries required
- **State Management** – Callback function for tracking reordered list state
- **Visual Feedback** – CSS-based drag states (dragging, over, enter)
- **Production Ready** – Minified output, optimized performance
- **Lightweight** – ~3KB unminified, ~1.2KB minified

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **HTML5** | ES5+ | Semantic markup with draggable attribute |
| **CSS3** | Modern | Styling with custom properties and RTL support |
| **JavaScript** | ES6+ | Vanilla implementation (no frameworks) |
| **Font** | Vazirmatn | Persian typography support |

**Dependencies:** None

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/awmiram/js-drag-and-drop.git
cd js-drag-and-drop
```

### 2. Include in Your Project

#### Option A: Direct HTML Include
```html
<link rel="stylesheet" href="style.css">
<script src="draggable.js"></script>
<script src="script.js"></script>
```

#### Option B: Module Import (CommonJS)
```javascript
const Draggable = require('./draggable.js');
```

### 3. Run Locally

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# Navigate to
# http://localhost:8000
```

---

## 🚀 Usage

### Basic Implementation

```javascript
// Define your data array
const data = [
  { id: 1, title: 'Item 1', text: 'Description...' },
  { id: 2, title: 'Item 2', text: 'Description...' },
  { id: 3, title: 'Item 3', text: 'Description...' }
];

// Define item template function
const template = (item) => `
  <div class="list-item" id="${item.id}">
    <div class="list-item_head">
      <span class="head-id">${item.id}</span>
    </div>
    <div class="list-item_content">
      <h3 class="item-title">${item.title}</h3>
      <p>${item.text}</p>
    </div>
  </div>
`;

// Initialize Draggable
new Draggable({
  el: document.querySelector('#list'),      // Target list container
  list: data,                                 // Data array
  template: template,                         // Template function
  update: (newList) => {                      // Callback on reorder
    console.log('Updated list order:', newList);
  }
});
```

### HTML Structure

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag and Drop List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="list" class="list"></div>
  
  <script src="draggable.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### Example Output

After reordering items 1, 3, 2 to sequence 3, 1, 2:

```javascript
[
  { id: 3, title: 'آیتم شماره 3', text: '...' },
  { id: 1, title: 'آیتم شماره 1', text: '...' },
  { id: 2, title: 'آیتم شماره 2', text: '...' }
]
```

---

## 🔧 API Reference

### Draggable Constructor

```javascript
new Draggable(options)
```

#### Options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `el` | `HTMLElement` | ✅ Yes | Container element for the list |
| `list` | `Array` | ✅ Yes | Data array containing list items |
| `template` | `Function` | ✅ Yes | Function returning HTML template for each item |
| `update` | `Function` | ⭕ Optional | Callback fired after reordering with new list array |

#### Example with Validation

```javascript
try {
  new Draggable({
    el: document.querySelector('#list'),
    list: items,
    template: (item) => `<div id="${item.id}">${item.title}</div>`,
    update: (reorderedList) => {
      // Save to backend or update state
      fetch('/api/reorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reorderedList)
      });
    }
  });
} catch (error) {
  console.error('Draggable initialization failed:', error.message);
}
```

---

## ⚙️ Configuration

### CSS Customization

Edit `style.css` to customize drag states:

```css
/* Dragging element (being moved) */
.list-item.dragElem {
  opacity: 0.4;
}

/* Drag over target */
.list-item.over {
  border-top: 2px solid blue;
}

/* Drag enter state */
.list-item.enter {
  opacity: 0.4;
}
```

### RTL Configuration

The project includes full RTL support via CSS:

```css
html {
  direction: rtl;
  font-family: 'Vazirmatn', serif;
}
```

For LTR (left-to-right), modify HTML:

```html
<html lang="en" dir="ltr">
```

### Environment Variables

No environment configuration needed. All settings are passed via constructor options.

---

## 📁 Project Structure

```
js-drag-and-drop/
├── index.html           # Demo HTML file
├── draggable.js         # Main Draggable class
├── script.js            # Demo initialization
├── style.css            # Styling (RTL optimized)
├── reset.css            # CSS reset utilities
├── README.md            # Documentation
```

### File Descriptions

| File | Purpose |
|------|---------|
| **draggable.js** | Core plugin with Draggable class (~3KB) |
| **script.js** | Demo data and initialization |
| **style.css** | Component styling with drag states |
| **reset.css** | CSS normalization |
| **index.html** | Demo page with working example |

---

## ✅ Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| iOS Safari | 14+ | ✅ Fully Supported |
| Android Chrome | 90+ | ✅ Fully Supported |

**Note:** Requires HTML5 Drag and Drop API support. IE 11 not supported.

---
### Code Style

- Use ES6+ syntax
- Add JSDoc comments for public methods
- Keep functions focused and single-responsibility
- Test in multiple browsers before submitting PR
---

**Last Updated:** February 2026  
**Version:** 1.0.0
