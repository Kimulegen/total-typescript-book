# Setting up a frontend app with Vite

## Learning Goals

- Understand how to automatically reload your browser when you make code changes
- Understand how to set up a modern frontend app with Vite

## Problem

There's another DX improvement to make. We have to manually refresh the browser every time we make a change. That's not very convenient.

For that, we're going to need to start using a frontend framework. You can choose any you like, but we're going to choose `Vite`. It's a modern frontend framework that's very fast and easy to use.

See if you can find a way to set up a Vite app. You'll need to:

- Visit Vite's documentation
- Take a look at their getting started guide
- Delete all our existing code
- Create a new vite app in its place

## Solution

To setup a Vite app, you can follow these steps:

1. Visit the [Vite documentation](https://vitejs.dev/).
2. Run the following command in your terminal to create a new Vite app:

```bash
pnpm create vite
```
3. Follow the prompts to choose a framework (e.g., React, Vue, etc.) and a project name.
4. Once the project is created, navigate into the project directory
5. Install the dependencies by running:

```bash
pnpm install
```
6. Start the development server with:

```bash
pnpm run dev
```
7. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`) to see your new Vite app in action.