"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Log to console
    console.log("Subscribed with:", email);
    alert("Thanks for subscribing! (Placeholder)");
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
          <Button type="submit">Subscribe</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
