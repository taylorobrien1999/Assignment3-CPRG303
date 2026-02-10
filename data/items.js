// workout plan 

export type Item = {
  id: string;
  title: string;
  subtitle: string;
};

export const items: Item[] = [
  { id: "1", title: "Workout Plan A", subtitle: "Speed + endurance" },
  { id: "2", title: "Workout Plan B", subtitle: "Strength day" },
  { id: "3", title: "Workout Plan C", subtitle: "Recovery + mobility" },
];
