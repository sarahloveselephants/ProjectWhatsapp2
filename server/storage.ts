import { type WaitlistSignup, type InsertWaitlistSignup } from "@shared/schema";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface IStorage {
  createWaitlistSignup(signup: InsertWaitlistSignup): Promise<WaitlistSignup>;
  getWaitlistSignupByEmail(email: string): Promise<WaitlistSignup | undefined>;
  saveUploadedFile(file: any): Promise<string>;
  getAllUploadedFiles(): Promise<string[]>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, WaitlistSignup>;
  private currentId: number;
  private uploadsDir: string;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
    this.uploadsDir = path.join(__dirname, '..', 'uploads');

    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(this.uploadsDir)) {
      fs.mkdirSync(this.uploadsDir, { recursive: true });
    }
  }

  async getWaitlistSignupByEmail(email: string): Promise<WaitlistSignup | undefined> {
    return Array.from(this.waitlist.values()).find(
      (signup) => signup.email === email
    );
  }

  async createWaitlistSignup(insertSignup: InsertWaitlistSignup): Promise<WaitlistSignup> {
    const id = this.currentId++;
    const signup: WaitlistSignup = { id, ...insertSignup };
    this.waitlist.set(id, signup);
    return signup;
  }

  async saveUploadedFile(file: any): Promise<string> {
    const fileName = file.name;
    const filePath = path.join(this.uploadsDir, fileName);

    await fs.promises.writeFile(filePath, file.data);
    return fileName;
  }

  async getAllUploadedFiles(): Promise<string[]> {
    const files = await fs.promises.readdir(this.uploadsDir);
    return files;
  }
}

export const storage = new MemStorage();