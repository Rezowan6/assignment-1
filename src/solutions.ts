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
const processInput = (value: string | number | boolean): string | number => {
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

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
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

// Todo: Problem 6:
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));

// Todo: Problem 7:
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// Todo: Problem 8:

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  } else {
    return await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  }
};

console.log(await validateAgeAsync(20));
