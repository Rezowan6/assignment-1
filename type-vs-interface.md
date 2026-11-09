# **Type Aliase VS Interface**

## **Introduction**

TypeScript-এ type এবং interface দুটোই object-এর structure বা shape নির্ধারণ করতে ব্যবহার করা হয়। তবে এদের কাজের ধরন ও কিছু সুবিধার মধ্যে পার্থক্য রয়েছে। তাই কোন পরিস্থিতিতে কোনটি ব্যবহার করলে code সহজ, পরিষ্কার এবং maintainable হবে, তা জানা গুরুত্বপূর্ণ।

## **Core Differences**

TypeScript-এ interface declaration merging support করে, একই নামের একাধিক interface একত্রিত হতে পারে, কিন্তু type alias-এর ক্ষেত্রে এটি সম্ভব নয়। interface অন্য interface-কে extends ব্যবহার করে extend করতে পারে, অন্যদিকে type একাধিক type একত্র করতে intersection (&) ব্যবহার করে। type দিয়ে Union (|), Tuple এবং Primitive alias তৈরি করা যায়, কিন্তু interface দিয়ে সরাসরি এগুলো করা যায় না। Class interface এবং উপযুক্ত object type alias—দুটিই implements করতে পারে। সাধারণত object-এর structure নির্ধারণে interface এবং complex type তৈরি করতে type ব্যবহার করা হয়।

## **Code Example**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Md Rezowan Miya",
  email: "rezowanmia.bd@gmail.com",
};

// Using Type
type Product = {
  id: number;
  title: string;
  price: number;
};

const product: Product = {
  id: 101,
  title: "Laptop",
  price: 50000,
};
```

## **When to Choose Which**

যখন কোনো object-এর structure নির্ধারণ করতে হবে এবং ভবিষ্যতে সেটিকে extends বা declaration merging-এর মাধ্যমে বড় করার প্রয়োজন হতে পারে, তখন interface ব্যবহার করব। অন্যদিকে, যখন Union, Intersection, Tuple বা Primitive alias তৈরি করতে হবে, তখন type ব্যবহার করব। আমার মতে, সাধারণ object structure-এর জন্য interface এবং complex type definition-এর জন্য type বেশি উপযোগী।

## **Conclusion**

type এবং interface দুটোই TypeScript-এ type safety নিশ্চিত করতে সাহায্য করে, তবে তাদের কিছু আলাদা বৈশিষ্ট্য রয়েছে। আমার সুপারিশ হলো, সাধারণ object structure-এর জন্য interface এবং Union, Tuple ও complex type তৈরির জন্য type ব্যবহার করা।
