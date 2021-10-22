interface CalculationType{
    label: string;
    explanation: string;
    info: string;
    nextNumber(): number;
    nextRandomFloat(): number;
    checkNumberLimit(): void;
}