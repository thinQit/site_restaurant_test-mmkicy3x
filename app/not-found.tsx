import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center md:px-6">
      <h1 className="text-3xl font-bold md:text-4xl">Page not found</h1>
      <p className="mt-4 text-base text-[#5B514B] md:text-lg">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
