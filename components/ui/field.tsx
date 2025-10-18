"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type FieldOrientation = "vertical" | "horizontal" | "responsive"

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: FieldOrientation
  ["data-invalid"]?: boolean
}

export function Field({
  className,
  orientation = "vertical",
  ...props
}: FieldProps) {
  const orientationClasses =
    orientation === "horizontal"
      ? "flex items-center gap-3"
      : orientation === "responsive"
        ? "grid items-start gap-3 @container/field-group:grid-cols-[1fr_minmax(0,1fr)] @container/field-group:items-center"
        : "flex flex-col gap-2"

  return (
    <div
      role="group"
      className={cn(
        "text-sm",
        orientationClasses,
        props["data-invalid"] ? "[&_*]:text-red-600" : undefined,
        className
      )}
      {...props}
    />
  )
}

export interface FieldContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FieldContent({ className, ...props }: FieldContentProps) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />
}

export interface FieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <label
      className={cn("text-sm font-medium text-gray-900", className)}
      {...props}
    />
  )
}

export interface FieldDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <p className={cn("text-xs text-gray-500 leading-relaxed", className)} {...props} />
  )
}

export interface FieldErrorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <div className={cn("text-xs text-red-600", className)} {...props} />
  )
}

export interface FieldGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FieldGroup({ className, ...props }: FieldGroupProps) {
  return (
    <div
      className={cn("@container/field-group flex flex-col gap-4", className)}
      {...props}
    />
  )
}

export interface FieldSetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

export function FieldSet({ className, ...props }: FieldSetProps) {
  return <fieldset className={cn("space-y-4", className)} {...props} />
}

export interface FieldLegendProps
  extends React.HTMLAttributes<HTMLLegendElement> {
  variant?: "legend" | "label"
}

export function FieldLegend({ className, variant = "legend", ...props }: FieldLegendProps) {
  return (
    <legend
      className={cn(
        variant === "label"
          ? "text-sm font-medium text-gray-900"
          : "text-base font-semibold text-gray-900",
        className
      )}
      {...props}
    />
  )
}

export interface FieldSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FieldSeparator({ className, ...props }: FieldSeparatorProps) {
  return (
    <div
      className={cn("my-2 h-px w-full bg-gray-200", className)}
      {...props}
    />
  )
}

export interface FieldTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FieldTitle({ className, ...props }: FieldTitleProps) {
  return (
    <div className={cn("text-sm font-medium text-gray-900", className)} {...props} />
  )
}


