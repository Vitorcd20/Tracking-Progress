type PendingGoals = {
  id: never;
  title: never;
  desiredWeeklyFrequency: never;
  completionCount: never;
}[];

export async function getPendingGoals(): Promise<PendingGoals> {
  const response = await fetch("http://localhost:3333/pending-goals");
  const data = await response.json();

  return data.pendingGoals;
}
