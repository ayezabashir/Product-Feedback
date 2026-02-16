export const initialSuggestions = [
  {
    id: 1,
    title: "Dark mode toggle",
    description:
      "Allow users to switch between light and dark themes for better accessibility.",
    upvotes: 98,
    comments: 5,
    category: "Feature",
    upvoted: false,
    status: "Planned",
  },
  {
    id: 2,
    title: "Improve button hover states",
    description:
      "Add more prominent hover effects to buttons for better visual feedback.",
    upvotes: 65,
    comments: 3,
    category: "UI",
    upvoted: false,
    status: "In Progress",
  },
  {
    id: 3,
    title: "Add user onboarding tutorial",
    description:
      "Guide new users through key features with a step-by-step tutorial.",
    upvotes: 120,
    comments: 8,
    category: "UX",
    upvoted: false,
    status: "Planned",
  },
  {
    id: 4,
    title: "Filter search results by date",
    description:
      "Allow users to filter results using date ranges for more precise search.",
    upvotes: 80,
    comments: 2,
    category: "Enhancement",
    upvoted: false,
    status: "Live",
  },
  {
    id: 5,
    title: "Fix login page error on slow networks",
    description:
      "Resolve the intermittent login failure issue when network speed is low.",
    upvotes: 150,
    comments: 12,
    category: "Bug",
    upvoted: false,
    status: "In Progress",
  },
  {
    id: 6,
    title: "Add comment reactions",
    description:
      "Allow users to react to comments with emojis like thumbs up or heart.",
    upvotes: 90,
    comments: 4,
    category: "Feature",
    upvoted: false,
    status: "Planned",
  },
];
export const initialComments = {
  2: [
    {
      id: 1,
      name: "Sophia Lee",
      username: "@designqueen",
      avatar: "https://i.pravatar.cc/150?img=70",
      text: "I think adding a dark mode toggle would greatly improve usability, especially for users who work late at night or prefer a low-light interface. It could also reduce eye strain significantly.",
      date: "20-Feb-2026",
    },
    {
      id: 2,
      name: "Liam Johnson",
      username: "@codewizard",
      avatar: "https://i.pravatar.cc/150?img=69",
      text: "There should be an option to filter search results by date, relevance, or popularity. This would help users find exactly what they’re looking for without having to scroll through irrelevant results, improving the overall experience.",
      date: "02-March-2024",
    },
  ],
};
