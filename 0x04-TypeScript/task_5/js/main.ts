interface Credits {
  credits: number;
}

type SubjectBrand = "MajorCredits" | "MinorCredits";

interface SubjectCredits extends Credits {
  brand: SubjectBrand;
}

function sumCredits<T extends SubjectCredits>(subject1: T, subject2: T): T {
  if (subject1.brand !== subject2.brand) {
    throw new Error("Cannot sum credits with different brands");
  }
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  } as T;
}

// Example usage
const major1: SubjectCredits = { credits: 30, brand: "MajorCredits" };
const major2: SubjectCredits = { credits: 25, brand: "MajorCredits" };
const sumOfMajors = sumCredits(major1, major2);
console.log("Sum of major credits:", sumOfMajors);

const minor1: SubjectCredits = { credits: 15, brand: "MinorCredits" };
const minor2: SubjectCredits = { credits: 10, brand: "MinorCredits" };
const sumOfMinors = sumCredits(minor1, minor2);
console.log("Sum of minor credits:", sumOfMinors);
