<p align="center">
<a href="https://github.com/vue-blocks/vue-blocks">
  <img src="https://raw.githubusercontent.com/vue-blocks/vue-blocks/master/public/vue-blocks.svg" alt="VueBlocks - The ultimate front-end building block library specifically designed for Vue" width="300">
</a>
<br>
The ultimate front-end building block library specifically designed for Vue
</p>

## 🚀 Project Overview

Vue Blocks is a modern Vue.js component library and development toolkit designed to accelerate UI development. It
provides a collection of pre-built, customizable components and blocks that follow best practices for performance,
accessibility, and design consistency.

### ✨Features

- 🚀 **Rapid Development** - pre-built component blocks, ready to use out of the box
- 🎨 **Aesthetic Design** - elaborately designed modern interface
- 📱 **Responsive** - perfectly adapted to various device sizes
- 🔧 **Easy to customize** - flexible configuration and style customization
- 📦 **Modularization** - introduced on demand to reduce package size

### 🛠️ Tech Stack

- **Framework**: Vue 3 + Nuxt4 + Shadcn/vue
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
- **Package Manager**: npm

## 📦 Getting Started

### Development Setup

Follow these steps to set up the development environment:

#### Step 1: Clone the Repository

```bash
git clone https://github.com/vue-blocks/vue-blocks
```

#### Step 2: Install Dependencies

```bash
npm install
```

#### Step 3: Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:3000`

### 🏗️ Adding New Block

To create and register new block modules:

#### Step 1: Complete Development Setup

Ensure you have completed all steps in the "Development Setup" section above.

#### Step 2: Generate Block Template

```bash
npm run registry:template
```

This command creates a new block module with the standard structure and boilerplate code.

#### Step 3: Run the build script

```shell
npm run registry:build
```

> **Note**: Note: you do not need to run this script for every change. You only need to run it when you update the block
> definition.

## 🤝 Contributing

Welcome to submit issues and Pull requests to help improve the project

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
