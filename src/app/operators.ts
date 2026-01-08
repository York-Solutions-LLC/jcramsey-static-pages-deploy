export interface Operator {
  id: number;
  isFirst: boolean;
  shortName: string;
  longName: string;
  printedName: string;
  f: (a: number, b: number) => number;
}

export const operators: Operator[] = [];

const addOp = (
  list: Operator[],
  printedName: string,
  longName: string,
  f: (a: number, b: number) => number,
) => {
  const newId = list.length;
  const newOp = {
    id: newId,
    isFirst: newId === 0,
    shortName: printedName.toLowerCase(),
    longName: longName,
    printedName: printedName,
    f: f,
  };
  list.push(newOp);
};

addOp(operators, 'Add', 'Addition', (a: number, b: number) => a + b);
addOp(operators, 'Sub', 'Subtraction', (a: number, b: number) => a - b);
addOp(operators, 'Mul', 'Multiplication', (a: number, b: number) => a * b);
addOp(operators, 'Div', 'Division', (a: number, b: number) => {
  if (b == 0) return Number.NaN;
  return a / b;
});
