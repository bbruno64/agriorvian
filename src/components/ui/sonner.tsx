"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="bottom-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "rounded-xl border border-slate-200 bg-white text-slate-900 shadow-lg",
          title: "text-sm font-semibold",
          description: "text-xs text-slate-500",
          error: "border-red-200 bg-white text-red-900",
          success: "border-emerald-200 bg-white text-emerald-900",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }