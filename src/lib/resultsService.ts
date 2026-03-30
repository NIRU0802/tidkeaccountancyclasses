export type Student = {
    name: string;
    rank: number;
    score: string;
    exam: string;
    class: "11th" | "12th";
    image: string;
  };
  
  export const YEARS = ["2022", "2023", "2024", "2025"] as const;
  
  /* ================= FETCH SINGLE YEAR ================= */
  export async function fetchYearData(year: string): Promise<Student[]> {
    const res = await fetch(`/data/${year}.json`);
    if (!res.ok) return [];
    return res.json();
  }
  
  /* ================= FETCH ALL YEARS (optional) ================= */
  export async function fetchAllYearsData() {
    const data: Record<string, Student[]> = {};
  
    await Promise.all(
      YEARS.map(async (year) => {
        const res = await fetch(`/data/${year}.json`);
        data[year] = res.ok ? await res.json() : [];
      })
    );
  
    return data;
  }