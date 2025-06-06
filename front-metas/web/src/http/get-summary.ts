type SummaryData = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryData> {
  const response = await fetch("http://localhost:3333/summary");
  const data = await response.json();

  return data.summary;
}
