# GitHub Pages Deployment Project

This is a simple four-function calculator, to practice GitHub actions and pages deployment.

## Local Run

To start a local development server, run:

```bash
npm run serve
```

The server will be live at `http://localhost:4200/`.

## Adding New Operations

Want to add new operations to the calculator? Below is a guide, which should help.

For example, let's say we want to add a **modulus operation**.

Go to `src/app/app.ts`.

Add a new mapping line for the modulus operation:

```ts
    public static getOperation(mode: number): (a: number, b: number) => number {
        if (mode === 1) return App.subOperation;
        if (mode === 2) return App.mulOperation;
        if (mode === 3) return App.divOperation;
        if (mode === 4) return App.modOperation; // <- This is our new line
        return App.addOperation;
    }
```

Then add the following function to the class definition:

```ts
    public static modOperation(a: number, b: number): number {
        return a % b;
    }
```

Now, go to `src/app/app.spec.ts` so we can add unit tests.

Add the following test case:

```ts
    it('should correctly map modulus', async () => {
        const operation = App.getOperation(4); // We mapped modulus to index 4
        const result = operation(4, 2);
        expect(result).toBe(0);
    });
```

Now test the new operation:

```bash
npm test
```
