"use client"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="MangrooveGuard">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-green-600 text-white text-xs font-bold">
        MG
      </span>
      <span className="font-semibold tracking-tight">MangrooveGuard</span>
    </div>
  )
}
