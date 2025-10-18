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
      <FieldGroup>
        <Field orientation="horizontal" className="gap-2">
          <FieldLabel htmlFor="newsletter-email" className="sr-only">
            Email
          </FieldLabel>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </Button>
          <FieldStatus state={status} />
        </Field>
      </FieldGroup>
      {status === "success" && (
        <FieldDescription className="text-secondary">
          Thanks for subscribing!
        </FieldDescription>
      )}
      {status === "exists" && (
        <FieldDescription>You're already subscribed.</FieldDescription>
      )}
      {status === "error" && (
        <FieldDescription>
          Something went wrong. Please try again.
        </FieldDescription>
      )}
    </form>
  );
}
