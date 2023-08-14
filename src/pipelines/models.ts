export const filters = ["Basic", "Advanced", "Expert", "Custom"] as const;

export type Label = typeof filters[number];

export type Column = {
  title: string;
  color: string;
  label: Label;
};
