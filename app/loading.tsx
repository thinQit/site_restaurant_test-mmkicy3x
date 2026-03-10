import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-20 md:px-6">
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-[320px] w-full rounded-xl" />
    </main>
  )
}
