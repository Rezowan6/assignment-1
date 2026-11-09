const multiplyValue = (
  value: number,
  multiplier: number | undefined = 2,
): number => {
  return value * multiplier;
};

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

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat(1);
}

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

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
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

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

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
