// NTC screenshot reference of workouts

export type Item = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  category: string;
  equipment: string;
  exercises: string[];
  description: string;
  isNew: boolean;
};

export const items: Item[] = [
  {
    id: '1',
    title: '60-Min Athlete Circuit',
    subtitle: 'Full-body strength and conditioning',
    duration: '60 min',
    level: 'Advanced',
    category: 'Strength',
    equipment: 'Full Equipment',
    exercises: ['Barbell squat', 'Bench press', 'Deadlift', 'Pull-ups', 'Overhead press', 'Box jumps'],
    description:
      'Push your limits with this advanced full-body circuit. Designed for athletes who want to build strength and conditioning simultaneously.',
    isNew: true,
  },
  {
    id: '2',
    title: '40-Min Athlete Strength & Conditioning',
    subtitle: 'Build power and endurance',
    duration: '40 min',
    level: 'Advanced',
    category: 'Strength',
    equipment: 'Full Equipment',
    exercises: ['Power cleans', 'Front squat', 'Push press', 'Bent-over row', 'Romanian deadlift'],
    description:
      'A focused strength and conditioning session combining explosive power movements with endurance work.',
    isNew: true,
  },
  {
    id: '3',
    title: '30-Min Lower Body Strength and Control',
    subtitle: 'Legs, glutes, and stability',
    duration: '30 min',
    level: 'Advanced',
    category: 'Strength',
    equipment: 'Full Equipment',
    exercises: ['Bulgarian split squat', 'Hip thrust', 'Leg press', 'Hamstring curl', 'Calf raise'],
    description:
      'Target your lower body with precision. This session focuses on building strength and neuromuscular control from hips to ankles.',
    isNew: true,
  },
  {
    id: '4',
    title: '20-Min Core Foundations',
    subtitle: 'Stability and strength from the inside out',
    duration: '20 min',
    level: 'Beginner',
    category: 'Core',
    equipment: 'Bodyweight',
    exercises: ['Plank', 'Dead bug', 'Bird dog', 'Hollow body hold', 'Side plank'],
    description:
      'Build a solid core foundation with this beginner-friendly session. No equipment needed.',
    isNew: false,
  },
  {
    id: '5',
    title: '30-Min Full Body HIIT',
    subtitle: 'Maximum burn, minimum time',
    duration: '30 min',
    level: 'Intermediate',
    category: 'Cardio',
    equipment: 'Bodyweight',
    exercises: ['Burpees', 'Jump squats', 'Mountain climbers', 'High knees', 'Push-ups'],
    description:
      'Short on time? This HIIT session delivers a full-body burn with zero equipment needed.',
    isNew: false,
  },
  {
    id: '6',
    title: '45-Min Mobility Flow',
    subtitle: 'Recover, reset, and move better',
    duration: '45 min',
    level: 'Beginner',
    category: 'Mobility',
    equipment: 'Bodyweight',
    exercises: ['Hip flexor stretch', 'Pigeon pose', 'Thoracic rotation', 'Shoulder circles', 'Cat-cow'],
    description:
      'Give your body the recovery it deserves. This flow targets common tight spots and improves overall range of motion.',
    isNew: false,
  },
];

export const categories = ['All', 'Strength', 'Cardio', 'Core', 'Mobility'];
