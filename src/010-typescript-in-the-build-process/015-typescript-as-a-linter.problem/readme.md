# Using TypeScript As A Linter

## Learning Goals

- Understand how TypeScript is used in most modern frontend apps

## Problem

You'll notice that our `dist` folder has disappeared. When you run this exercise, we're not appearing to generate any JavaScript code.

Try cd-ing to the directory and running `tsc`. You'll notice that no JavaScript code is being emitted. Why is that?

- Take a look at the `tsconfig.json`
- Take a look at the options there. See if you can find one that decides whether TypeScript emits JavaScript code or not.

## Solution

The configuration inside tsconfig.json that prevents TypeScript from emitting JavaScript code is the `noEmit` option. When `noEmit` is set to `true`, TypeScript will not generate any output files (JavaScript, declaration files, etc.) when you run the `tsc` command. This is often used in scenarios where you want to use TypeScript solely for type checking and linting purposes, without actually producing any JavaScript code. In our case, we have `noEmit` set to `true`, which is why we don't see any JavaScript files being generated in the `dist` folder.