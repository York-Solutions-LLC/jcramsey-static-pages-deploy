export interface Operator {
  id: number;
  isFirst: boolean;
  shortName: string;
  longName: string;
  printedName: string;
  f: (a: number, b: number) => number;
  testCases?: { a: number; b: number; expected: number | 'NaN'; description?: string }[];
}

export const operators: Operator[] = [];

const addOp = (
  list: Operator[],
  printedName: string,
  longName: string,
  f: (a: number, b: number) => number,
  testCases?: { a: number; b: number; expected: number | 'NaN'; description?: string }[],
) => {
  const newId = list.length;
  const newOp = {
    id: newId,
    isFirst: newId === 0,
    shortName: printedName.toLowerCase(),
    longName: longName,
    printedName: printedName,
    f: f,
    testCases: testCases,
  };
  list.push(newOp);
};

addOp(operators, 'Add', 'Addition', (a: number, b: number) => a + b, [
  { a: 2, b: 3, expected: 5, description: 'positive integers' },
  { a: -5, b: -3, expected: -8, description: 'negative numbers' },
  { a: 2.5, b: 3.7, expected: 6.2, description: 'decimals' },
  { a: 0, b: 5, expected: 5, description: 'with zero' },
]);

addOp(operators, 'Sub', 'Subtraction', (a: number, b: number) => a - b, [
  { a: 5, b: 3, expected: 2, description: 'positive result' },
  { a: 3, b: 5, expected: -2, description: 'negative result' },
  { a: -5, b: -3, expected: -2, description: 'negative operands' },
  { a: 5, b: 0, expected: 5, description: 'with zero' },
]);

addOp(operators, 'Mul', 'Multiplication', (a: number, b: number) => a * b, [
  { a: 4, b: 3, expected: 12, description: 'positive integers' },
  { a: -4, b: 3, expected: -12, description: 'negative result' },
  { a: -4, b: -3, expected: 12, description: 'double negative' },
  { a: 5, b: 0, expected: 0, description: 'with zero' },
]);

addOp(
  operators,
  'Div',
  'Division',
  (a: number, b: number) => {
    if (b === 0) return Number.NaN;
    return a / b;
  },
  [
    { a: 6, b: 3, expected: 2, description: 'even division' },
    { a: 7, b: 2, expected: 3.5, description: 'with decimal result' },
    { a: -6, b: 3, expected: -2, description: 'negative dividend' },
    { a: 5, b: 0, expected: 'NaN', description: 'divide by zero' },
    { a: 0, b: 5, expected: 0, description: 'zero dividend' },
  ],
);
