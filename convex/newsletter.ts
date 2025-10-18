import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const normalizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      throw new Error("Invalid email");
    }

    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .unique();

    if (existing) return { status: "already_subscribed" as const };

    await ctx.db.insert("subscribers", {
      email: normalizedEmail,
      createdAt: Date.now(),
    });

    return { status: "subscribed" as const };
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("subscribers").collect();
  },
});


