# md2html_script

A tiny JavaScript utility that allows you to write documents in Markdown-like syntax and render them directly as HTML in the browser.

Simply append the script to the bottom of your file, save it with the `.html` extension, and your content will be automatically transformed into a clean, readable HTML page.

## Features

* Zero dependencies
* Single-file solution
* Automatic light/dark mode support
* Clean typography using Fira Sans
* Code block rendering
* One-click code copy button
* Simple Markdown-style authoring
* Works directly from GitHub Raw URL

---

## Installation

Add the following script tag at the very end of your HTML file:

```html
<script src="https://raw.githubusercontent.com/necdetuygur/md2html_script/refs/heads/master/md2html_script.js"></script>
```

---

## Usage

Create a file named:

```text
example.html
```

Write your content using Markdown-like syntax:

````html
# My Documentation

## Introduction

This is a simple document.

---

### Example Code

```javascript
console.log("Hello World");
```

Some more content...
````

Then append the script tag at the bottom:

```html
<script src="https://raw.githubusercontent.com/necdetuygur/md2html_script/refs/heads/master/md2html_script.js"></script>
```

Open the file in your browser.

The script will automatically:

* Apply styling
* Render code blocks
* Add copy-to-clipboard buttons
* Enable light/dark mode support
* Improve typography and layout

---

## Code Blocks

Example:

````text
```javascript
function hello() {
  console.log("Hello World");
}
```
````

Rendered output:

* Syntax-safe code display
* Copy button (📋)
* Automatic HTML escaping

---

## Horizontal Separators

You can create section separators using:

```text
---
```

The script converts them into a styled divider.

---

## Dark Mode Support

The page automatically respects the user's preferred color scheme using:

```css
color-scheme: light dark;
```

No additional configuration is required.

---

## Example

````html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Document</title>
</head>
<body>

# My Notes

This document is written almost entirely in Markdown.

---

## Example

```javascript
console.log("Hello from md2html_script");
````

<script src="https://raw.githubusercontent.com/necdetuygur/md2html_script/refs/heads/master/md2html_script.js"></script>

</body>
</html>
```

---

## How It Works

When the page loads, the script:

1. Processes the document body.
2. Converts separators (`---`) into styled dividers.
3. Detects fenced code blocks (```).
4. Escapes HTML inside code blocks.
5. Creates copy-to-clipboard buttons.
6. Injects typography and theme styles.
7. Enables responsive reading layout.

---

## Limitations

Currently the script is intentionally lightweight and only provides a small subset of Markdown-like behavior.

Supported:

* Code blocks
* Section separators
* Basic heading cleanup
* Automatic styling

Not intended to be a full Markdown parser.

---

## License

MIT
