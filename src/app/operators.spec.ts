import { operators } from './operators';

describe('operators', () => {
  describe('array structure', () => {
    it('should have sequential IDs starting from 0', () => {
      operators.forEach((op, index) => {
        expect(op.id).toBe(index);
      });
    });

    it('should mark only the first operator with isFirst', () => {
      expect(operators[0].isFirst).toBe(true);
      operators.slice(1).forEach((op) => {
        expect(op.isFirst).toBe(false);
      });
    });

    it('should generate lowercase shortNames from printedNames', () => {
      operators.forEach((op) => {
        expect(op.shortName).toBe(op.printedName.toLowerCase());
      });
    });

    it('should have all required properties', () => {
      operators.forEach((op) => {
        expect(op).toHaveProperty('id');
        expect(op).toHaveProperty('isFirst');
        expect(op).toHaveProperty('shortName');
        expect(op).toHaveProperty('longName');
        expect(op).toHaveProperty('printedName');
        expect(op).toHaveProperty('f');
        expect(typeof op.f).toBe('function');
      });
    });
  });

  // Automatically test all operators with their test cases
  operators.forEach((operator) => {
    describe(`${operator.longName} operator`, () => {
      if (operator.testCases) {
        operator.testCases.forEach((testCase) => {
          const description = testCase.description || `${testCase.a} and ${testCase.b}`;

          it(`should handle ${description}`, () => {
            const result = operator.f(testCase.a, testCase.b);

            if (testCase.expected === 'NaN') {
              expect(isNaN(result)).toBe(true);
            } else if (Number.isInteger(testCase.expected)) {
              expect(result).toBe(testCase.expected);
            } else {
              // Use toBeCloseTo for floating point comparisons
              expect(result).toBeCloseTo(testCase.expected);
            }
          });
        });
      } else {
        it('should have test cases defined', () => {
          // This will fail if an operator is added without test cases
          expect(operator.testCases).toBeDefined();
          expect(operator.testCases?.length).toBeGreaterThan(0);
        });
      }
    });
  });
});
