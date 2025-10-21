import { promises as fs } from "fs";
import path from "path";

export type Status = {
  projects: Array<{ name: string; url?: string | null; active?: boolean }>;
};

export async function getStatus(): Promise<Status | null> {
  try {
    const file = await fs.readFile(
      path.join(process.cwd(), "data/status.json"),
      "utf8"
    );
    return JSON.parse(file) as Status;
  } catch {
    return null;
  }
}
