export const reservation = {
  all: ["reservation"] as const,
  user: (userId: number) => [...reservation.all, "user", `${userId}`] as const,
};

export const room = {
  all: ["room"] as const,
};
