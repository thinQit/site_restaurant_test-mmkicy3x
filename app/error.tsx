"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center md:px-6">
      <h1 className="text-3xl font-bold md:text-4xl">Something went wrong</h1>
      <p className="mt-4 text-base text-[#5B514B] md:text-lg">
        We couldn’t load this page right now. Please try again.
      </p>
      <Button className="mt-8" onClick={reset}>
        Try again
      </Button>
    </main>
  )
}
