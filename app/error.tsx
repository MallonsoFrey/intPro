'use client' // Error boundaries must be Client Components
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <h2>Something went wrong!</h2>
        <p>Error: {error.message}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}