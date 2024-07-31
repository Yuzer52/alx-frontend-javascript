interface MajorCredits {
  credits: number;
  brand?: string; // Optional property
}

interface MinorCredits {
  credits: number;
  brand: string; // Required property
}

// Function to sum credits for MajorCredits
export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
  return subject1.credits + subject2.credits;
}

// Function to sum credits for MinorCredits
export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
  return subject1.credits + subject2.credits;
}

