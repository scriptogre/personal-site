# The Script Ogres 🚀

## Description

### About Us
Welcome to the heart of **ScriptOgres**, where passion seamlessly intertwines with code. As a small yet dynamic team of developers, we are on a mission to redefine web design. At ScriptOgres, we go beyond the ordinary, crafting websites that are not just functional but exude their own unique personality.

### Our Commitment
#### Beyond the Ordinary
Say farewell to generic landing pages built with uninspiring WordPress themes. At ScriptOgres, we're committed to pushing the boundaries of conventional web design to deliver something extraordinary.

#### Crafted with Care
Every line of code in this repository is a testament to our dedication. We believe in crafting websites that not only look good but also provide seamless and enjoyable user experiences.

### What You'll Find Here
#### Cutting-Edge Tech
Dive into the world of the latest technologies. This repository showcases our use of cutting-edge tools such as Astro, Svelte, TailwindCSS, and more. We're not just keeping up with the trends; we're setting them.

#### Passionate Development
Our love for what we do shines through in every commit. From design elements to functionality, we've poured our passion into every aspect of this project.

### Get Involved
Feel free to explore our code, share your thoughts, and contribute to the evolution of our website. Whether you're a fellow developer, a designer, or someone who appreciates the artistry of web development, we invite you to join us on this journey.

Because great websites are made with a blend of innovation, passion, and a touch of magic.


## Installation

To run The Script Ogres locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/eliasrestea/scriptogres.git
cd scriptogres
```

### 2. Install Dependencies

Make sure you have npm installed. Then, run the following command to install the project dependencies:

```bash
npm install
```

### 3. Install Astro Icons

Install astro-icons for enhanced icon support:

```bash
npm install astro-icons
```

### 4. Start the Development Server

Run the following command to start the local development server:

```bash
npm run dev
```

This will launch your Astro project locally.

### 5. Open in Your Browser

Open your browser and navigate to [http://localhost:4321](http://localhost:4321) to view The Script Ogres.

## Adding New Content 📝

To enrich The Script Ogres website with new content, follow these straightforward steps:

### 1. Images and GIFs:

   - Place an image and GIF associated with your project in the `src/assets` directory. Organize them appropriately to maintain a clean project structure.

   ```plaintext
   /src
   ├── assets
       ├── images
       |    ├── image1.webp
       |
       └── gifs
            ├── gif1.gif
   ```

### 2. Markdown Files:

Navigate to `src/content/clientsPortfolio`.

Create a new `.md` file for your project. You need to use the existing files as templates.

Include essential details about your project using Markdown syntax. Here's an example you can use:

```markdown
---
title: Cryptoheads
category: Web design
description: This was the foremost important collection released by IceBergNFT and required an especially distinct-looking page. The client was very satisfied with the design, and so was I.   
gif: "../../assets/gifs/portfolio-cryptoheads.gif"
coverPhoto: "../../assets/images/portfolio-cryptoheads.webp"
---
```

After pushing the changes, they will automatically deploy.

## Usage

Describe how users can interact with your project.

Customize the content based on the project's specifics. The new project will automatically be integrated into The Script Ogres website upon saving the file.
