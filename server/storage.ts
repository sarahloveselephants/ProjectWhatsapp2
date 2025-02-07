import { type WaitlistSignup, type InsertWaitlistSignup } from "@shared/schema";

export interface IStorage {
  createWaitlistSignup(signup: InsertWaitlistSignup): Promise<WaitlistSignup>;
  getWaitlistSignupByEmail(email: string): Promise<WaitlistSignup | undefined>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, WaitlistSignup>;
  private currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
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
}

export const storage = new MemStorage();
