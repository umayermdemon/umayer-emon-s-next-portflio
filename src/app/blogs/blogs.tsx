export const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Next.js হলো React-এর উপর ভিত্তি করে তৈরি একটি শক্তিশালী Framework, যা Static Site Generation (SSG) এবং Server-Side Rendering (SSR) সমর্থন করে। এটি ডেভেলপারদের দ্রুতগতির ও SEO-ফ্রেন্ডলি ওয়েবসাইট তৈরি করতে সাহায্য করে। Next.js-এর File-Based Routing, API Routes, Built-in CSS Support, এবং Dynamic Rendering এর মতো ফিচারগুলো একে অন্যদের থেকে আলাদা করেছে। Next.js দিয়ে প্রজেক্ট শুরু করতে npx create-next-app কমান্ড ব্যবহার করে সহজেই প্রজেক্ট তৈরি করা যায়। প্রজেক্টের ফোল্ডারগুলোতে pages/ ফোল্ডার পেজ তৈরির জন্য এবং public/ ফোল্ডার স্ট্যাটিক ফাইল সংরক্ষণের জন্য ব্যবহার করা হয়। Next.js-এ Server-Side Rendering (SSR) এবং Static Site Generation (SSG) উভয়ই সমর্থিত, যা আপনার অ্যাপকে আরও পারফরম্যান্স-সমৃদ্ধ এবং দ্রুতগতির করে তোলে। Next.js প্রজেক্ট সহজেই Vercel-এ ডিপ্লয় করা যায়, যা ডেভেলপমেন্টকে আরও সহজ এবং কার্যকর করে তোলে।",
    author: "Md Emon Miah",
    date: "2025-02-01",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739374433/nextjs_c52g51.png",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description:
      "React Hooks হচ্ছে React 16.8 ভার্সনে যোগ হওয়া একটি নতুন ফিচার, যা ক্লাস ব্যবহার না করেই ফাংশন কম্পোনেন্টে state এবং lifecycle method যুক্ত করার সুযোগ দেয়। Hooks-এর সবচেয়ে জনপ্রিয় দুটি হুক হলো useState এবং useEffect। useState ফাংশন কম্পোনেন্টে state ম্যানেজ করতে ব্যবহার হয়, যেখানে useEffect side effects হ্যান্ডেল করতে ব্যবহৃত হয়। এগুলো React ডেভেলপমেন্টকে সহজ ও আরও সংক্ষিপ্ত করেছে। Hooks ব্যবহার করে আপনি কোড আরও রিডেবল এবং মডুলার করতে পারবেন। এছাড়া কাস্টম হুক তৈরি করে কোড পুনঃব্যবহারযোগ্য করা যায়। Hooks আমাদের life cycle events যেমন componentDidMount, componentDidUpdate, componentWillUnmount ইত্যাদির বিকল্প প্রদান করে। React Hooks-এর মাধ্যমে componentDidMount, componentDidUpdate, componentWillUnmount ইত্যাদি lifecycle method-এর কাজগুলো ফাংশন কম্পোনেন্টে সহজেই করা যায়। Hooks ব্যবহার করলে কোড সংক্ষিপ্ত হয়, পুনঃব্যবহারযোগ্য হয়, এবং ডিবাগ করাও সহজ হয়ে যায়। Hooks-এর সবচেয়ে ব্যবহৃত দুটি হুক হলো useState এবং useEffect।",
    author: "Md Emon Miah",
    date: "2025-01-20",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739374510/react-hooks_utzb4v.png",
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    description:
      "Node.js হলো একটি ওপেন-সোর্স, ক্রস-প্ল্যাটফর্ম রানটাইম এনভায়রনমেন্ট যা JavaScript কোড সার্ভার-সাইডে রান করতে ব্যবহার করা হয়। এটি Chrome V8 JavaScript Engine ব্যবহার করে দ্রুত এবং দক্ষতার সঙ্গে কোড প্রসেস করে। সাধারণত, JavaScript ওয়েব ব্রাউজারে চালানো হয়, কিন্তু Node.js এর মাধ্যমে একই JavaScript কোড সার্ভার বা বিভিন্ন ব্যাকএন্ড অ্যাপ্লিকেশন তৈরি করতে ব্যবহার করা যায়। Node.js মূলত Single-threaded, Non-blocking I/O model ব্যবহার করে, যা একে খুবই দ্রুত এবং স্কেলেবল করে তোলে। Node.js দিয়ে আপনি ওয়েব সার্ভার তৈরি, API ডেভেলপমেন্ট, Real-time Applications (যেমন: চ্যাট অ্যাপস, গেমিং সার্ভার, স্ট্রিমিং সার্ভিস) এবং আরও অনেক কিছু তৈরি করতে পারবেন। npm (Node Package Manager) ব্যবহার করে হাজার হাজার প্যাকেজ বা মডিউল খুব সহজে ইন্টিগ্রেট করা যায়, যা ডেভেলপমেন্টকে অনেক সহজ এবং দ্রুত করে তোলে। Node.js এর অন্যতম সুবিধা হলো এটি Asynchronous Programming এর জন্য উপযোগী, অর্থাৎ একাধিক কাজ একসঙ্গে চালানো সম্ভব। তাই যারা ওয়েব ডেভেলপমেন্ট বা JavaScript নিয়ে কাজ করতে চান, তাদের জন্য Node.js শেখা অত্যন্ত গুরুত্বপূর্ণ। চাইলে বিস্তারিত অংশগুলো, যেমন ইনস্টলেশন, মডিউল ব্যবস্থাপনা, অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং, ইভেন্ট লুপ, API তৈরি, রিয়েল-টাইম অ্যাপ্লিকেশন ইত্যাদি আলাদা আলাদা বিষয় হিসেবে আলোচনা করা যাবে।",
    author: "Md Emon Miah",
    date: "2024-12-15",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739374969/nodejs_ljcvpm.png",
  },
  {
    id: 4,
    title: "Mastering MongoDB",
    description:
      "MongoDB হলো একটি NoSQL ডাটাবেজ যা উচ্চ পারফরমেন্স, উচ্চ অ্যাভেলেবিলিটি এবং স্কেলেবিলিটি প্রদান করে। এই ব্লগে MongoDB এর বেসিক ধারণা থেকে শুরু করে ডাটাবেস, কালেকশন, ডকুমেন্ট তৈরি এবং CRUD অপারেশন নিয়ে আলোচনা করা হবে। Node.js এর সাথে MongoDB ইন্টিগ্রেশন করে কীভাবে ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরি করবেন তা এখানে শিখতে পারবেন।",
    author: "Md Emon Miah",
    date: "2024-11-25",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375119/mongodb_segh7u.png",
  },
  {
    id: 5,
    title: "How to Build a REST API with Express.js",
    description:
      "Express.js হলো একটি ন্যূনতম এবং ফ্লেক্সিবল Node.js ফ্রেমওয়ার্ক যা ওয়েব অ্যাপ্লিকেশন এবং API তৈরি করতে ব্যবহৃত হয়। এই ব্লগে একটি সরল REST API তৈরি করার প্রক্রিয়া দেখানো হবে। রাউট সেটআপ, HTTP রিকোয়েস্ট হ্যান্ডেল, ডাটাবেস সংযোগ এবং JSON রেসপন্স রিটার্ন করার পদ্ধতি শিখবেন।",
    author: "Md Emon Miah",
    date: "2024-11-10",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739376159/expressjs_fl2bt3.png",
  },
  {
    id: 6,
    title: "Understanding JWT Authentication",
    description:
      "JSON Web Tokens (JWT) একটি গুরুত্বপূর্ণ টুল যা ওয়েব অ্যাপ্লিকেশন সুরক্ষিত করতে ব্যবহৃত হয়। এই ব্লগে JWT এর মৌলিক ধারণা, কাজের পদ্ধতি এবং Node.js এবং Express অ্যাপ্লিকেশনে JWT অটেনটিকেশন ইমপ্লিমেন্ট করার কৌশল নিয়ে বিস্তারিত আলোচনা করা হবে।",
    author: "Md Emon Miah",
    date: "2024-10-30",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739376046/jwt_fpu7so.png",
  },
  {
    id: 7,
    title: "CSS Grid vs Flexbox",
    description:
      "সঠিক লেআউট টেকনিক নির্বাচন করা একটি রেস্পনসিভ ওয়েব ডিজাইন তৈরির জন্য অত্যন্ত গুরুত্বপূর্ণ। এই ব্লগে CSS Grid এবং Flexbox এর মধ্যে তুলনা করা হবে। কখন কোনটি ব্যবহার করবেন এবং কীভাবে এটি আপনার ওয়েব অ্যাপ্লিকেশন ডিজাইন করতে সাহায্য করবে তা জানবেন।",
    author: "Md Emon Miah",
    date: "2024-10-15",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375723/css-grid_jbo7dl.png",
  },
  {
    id: 8,
    title: "Optimizing React Applications",
    description:
      "React বড় স্কেল অ্যাপ্লিকেশনে পারফরমেন্স বটলনেকের সম্মুখীন হতে পারে। এই ব্লগে React অ্যাপ্লিকেশন অপটিমাইজ করার বিভিন্ন কৌশল যেমন মেমোয়াইজেশন, লেজি লোডিং এবং React Profiler ব্যবহার করার পদ্ধতি শেখানো হবে।",
    author: "Md Emon Miah",
    date: "2024-09-28",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375121/react_iuy8by.png",
  },
  {
    id: 9,
    title: "Introduction to Redux",
    description:
      "Redux একটি জনপ্রিয় স্টেট ম্যানেজমেন্ট লাইব্রেরি যা জাভাস্ক্রিপ্ট অ্যাপ্লিকেশনে ব্যবহার করা হয়। এই ব্লগে Redux এর অ্যাকশন, রিডিউসার এবং স্টোর নিয়ে বিস্তারিত আলোচনা করা হবে। একটি সিম্পল কাউন্টার অ্যাপ্লিকেশন তৈরি করে কীভাবে Redux ব্যবহার করবেন তা শিখবেন।",
    author: "Md Emon Miah",
    date: "2024-09-10",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375122/redux_au6kpo.svg",
  },
  {
    id: 10,
    title: "Deploying Next.js Applications",
    description:
      "আপনার Next.js অ্যাপ্লিকেশন প্রস্তুত হয়ে গেলে পরবর্তী পদক্ষেপ হলো এটি ডেপ্লয় করা। এই ব্লগে Vercel, Netlify এবং AWS এ Next.js অ্যাপ্লিকেশন ডেপ্লয় করার ধাপগুলি ব্যাখ্যা করা হবে। বিল্ড অপটিমাইজেশন, এনভায়রনমেন্ট ভেরিয়েবল এবং কমন ডেপ্লয়মেন্ট সমস্যা নিয়েও আলোচনা করা হবে।",
    author: "Md Emon Miah",
    date: "2024-08-30",
    image:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739374433/nextjs_c52g51.png",
  },
];
