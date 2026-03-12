# Compiling your JavaScript files to a directory

## Learning Goals

- Learn how to compile your TypeScript files to a directory

## Problem

Things are looking good. We've got a TypeScript file that emits JavaScript whenever we change it. But the JavaScript file is in the same directory as the TypeScript file. That's not very clean.

See if you can find a way to compile the TypeScript file to a directory called `dist`. You'll need to:

- Change the `tsconfig.json` file
- Add `dist` to `.gitignore`

Remember to check the [TSConfig options](https://www.typescriptlang.org/tsconfig).

## Solution

To compile TypeScript files to a directory called `dist`, you can follow these steps:
1. Open your `tsconfig.json` file and add the following option to specify the output directory for the compiled JavaScript files:

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

2. Next, open your `.gitignore` file and add the `dist` directory to it to prevent the compiled JavaScript files from being committed to your version control:

```
dist/
```

3. Finally, run the TypeScript compiler in watch mode to automatically compile your TypeScript files whenever you save them:

```bash
tsc --watch
```