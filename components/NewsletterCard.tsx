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
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

export function NewsletterCard() {
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
    <form onSubmit={handleSubmit}>
      <p className="mb-2.5 text-sm text-muted-foreground">
        Join the lab notes: occasional updates, no spam.
      </p>
      <FieldGroup>
        <Field orientation="vertical" className="gap-2">
          <FieldLabel htmlFor="newsletter-email" className="sr-only">
            Email
          </FieldLabel>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <Input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-9 text-sm bg-card/60 placeholder:text-foreground/60 ring-1 ring-border/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full md:w-auto shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 hover:ring-1 hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </Button>
          </div>
          <FieldStatus state={status} />
        </Field>
      </FieldGroup>
      {status === "success" && (
        <FieldDescription className="text-secondary">
          Thanks for subscribing!
        </FieldDescription>
      )}
      {status === "exists" && (
        <FieldDescription>You&apos;re already subscribed.</FieldDescription>
      )}
      {status === "error" && (
        <FieldDescription>
          Something went wrong. Please try again.
        </FieldDescription>
      )}
    </form>
  );
}
