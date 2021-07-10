// prettier-ignore
type StringToCharArray<Str extends string> =
    string extends Str
      ? string[]
      : Str extends ''
        ? []
        : Str extends `${infer PartOne}${infer PartTwo}`
          ? [PartOne, ...StringToCharArray<PartTwo>]: [Str]

// prettier-ignore
export type Percent<Value extends number>
  = `${Value}` extends `${infer NumberToString}`
    ? NumberToString extends `-${string}`
      // If negative
      ? never
      // is Positive
      : StringToCharArray<NumberToString> extends infer Chars
        ? Chars extends { length: 1 }
          // One digit
          ? Value
          // Two digit
          : Chars extends { length: 2 }
            ? Value
            // Only 100 is allowed in Three digit numbers
            : Value extends 100 ? 100 : never
        : never
    : never
