# **Type Narrowing**

## **Introduction**

Type Narrowing হলো কোনো variable-এর type যাচাই করে নির্দিষ্ট type-এ নিয়ে আসা। এটি Union Type-এর ক্ষেত্রে নিরাপদে property ও method ব্যবহার করতে সাহায্য করে।

## **Narrowing with typeof**

typeof ব্যবহার করে string, number, boolean ইত্যাদি primitive type যাচাই করা যায়। এর মাধ্যমে variable-এর type নিশ্চিত করে সেই type অনুযায়ী কাজ করা যায়।

```typescript
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
```

## **Narrowing with instanceof**

instanceof দিয়ে কোনো object নির্দিষ্ট class-এর instance কি না যাচাই করা যায়।

```typescript
class PrivateCar {
  startPrivateCar(): string {
    return "Private Car start";
  }
}

class Buss {
  startBuss(): string {
    return "Buss start";
  }
}

function startCar(car: PrivateCar | Buss): string {
  if (car instanceof PrivateCar) {
    return car.startPrivateCar();
  }
  return car.startBuss();
}
```

## **Narrowing with the in Operator**

in operator ব্যবহার করে কোনো object-এর মধ্যে নির্দিষ্ট property আছে কি না যাচাই করা যায়। এর মাধ্যমে আলাদা object type শনাক্ত করে নিরাপদে সেই property ব্যবহার করা যায়।

```typescript
type TBird = { fly: () => void };
type TFish = { swim: () => void };

const move = (animal: TBird | TFish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};
```

## **Conclusion**

typeof primitive type, instanceof class instance এবং in object-এর property যাচাই করতে ব্যবহার হয়। Type Narrowing ভুল type-এর operation আটকায় এবং code-এর type safety বাড়ায়।
