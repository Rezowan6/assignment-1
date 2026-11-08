// Todo: Problem 1:

const multiplyValue = (
  value: number,
  multiplier: number | undefined = 2,
): number => {
  return value * multiplier;
};

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(10, 0));

// Todo: Problem 2:
const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (!value) {
      return "Inactive";
    } else {
      return "Active";
    }
  }
};

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

// Todo: Problem 3:

const formatCoordinate = (coordinate: readonly [number, number, string]) => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude} ${longitude})`;
};

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// Todo: Problem 4:

function concatenateArrays<T>(...arrays: T[][]) {
  return arrays.flat(Infinity);
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Todo: Problem 5:
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (course: Course[], minStudents: number): Course[] => {
  return course.filter(
    (item) => item.isPublished && item.students >= minStudents,
  );
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

console.log(getPopularCourses(courses, 80));
