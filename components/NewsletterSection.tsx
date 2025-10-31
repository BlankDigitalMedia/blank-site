"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
    Field,
    FieldDescription,
    FieldStatus,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "exists" | "error"
    >("idle");
    const subscribe = useMutation(api.newsletter.subscribe);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setStatus("loading");
            const res = await subscribe({ email });
            if (res?.status === "already_subscribed") {
                setStatus("exists");
            } else {
                setStatus("success");
                setEmail("");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-6">
            <div className="bg-accent/30 border border-border rounded-2xl p-8 md:p-10">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-3">
                        Practical fixes for Southwest Michigan small businesses
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        1–2 emails per month. Website tips, AI shortcuts, and local tech updates. No agency fluff.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field orientation="vertical" className="gap-3">
                                <FieldLabel htmlFor="newsletter-email" className="sr-only">
                                    Email address
                                </FieldLabel>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="you@yourbusiness.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="flex-1 h-11 text-sm bg-background border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                    />
                                    <Button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="h-11 px-6 bg-foreground text-background hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                    >
                                        {status === "loading" ? "Subscribing…" : "Get the monthly fix"}
                                    </Button>
                                </div>
                                <FieldStatus state={status} />
                            </Field>
                        </FieldGroup>
                        {status === "success" && (
                            <FieldDescription className="text-center mt-3 text-sm">
                                ✓ You're in. Check your email for confirmation.
                            </FieldDescription>
                        )}
                        {status === "exists" && (
                            <FieldDescription className="text-center mt-3 text-sm">
                                You're already subscribed.
                            </FieldDescription>
                        )}
                        {status === "error" && (
                            <FieldDescription className="text-center mt-3 text-sm">
                                Something went wrong. Please try again.
                            </FieldDescription>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
