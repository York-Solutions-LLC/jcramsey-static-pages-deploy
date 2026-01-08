# GitHub Pages Deployment Project

[![Build and Deploy](https://github.com/York-Solutions-LLC/jcramsey-static-pages-deploy/actions/workflows/main.yml/badge.svg)](https://github.com/York-Solutions-LLC/jcramsey-static-pages-deploy/actions/workflows/main.yml)

This is a simple four-function calculator, to practice GitHub actions and pages deployment.

You can find it [live on GitHub Pages](https://york-solutions-llc.github.io/jcramsey-static-pages-deploy/).

## Local Run

### 1 - Clone the Repo

```bash
git clone git@github.com:York-Solutions-LLC/jcramsey-static-pages-deploy.git
```

### 2 - Enter the Repo Directory

```bash
cd jcramsey-static-pages-deploy
```

### 3 - Install the Dependencies

```bash
npm i
```

### 4 - Build the Project

```bash
npm run build
```

### 5 - Serve Locally

```bash
npm run serve
```

The server will be live at `http://localhost:4200/`.

## Adding New Operations

Want to add new operations to the calculator? Below is a guide, which should help.

For example, let's say we want to add a **modulus operation**.

Go to `src/app/operators.ts`.

Add the following lines:

```ts
addOp(operators, 'Mod', 'Modulus', (a: number, b: number) => a % b);
```

And _tada!_ The calculator now supports the **modulus operation**!
