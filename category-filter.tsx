"use client"

import type React from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

export function CategoryFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const currentCategory = searchParams.get("category") || "all"

  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <FilterButton active={currentCategory === "all"} onClick={() => setCategory("all")}>
        Wszystko
      </FilterButton>
      <FilterButton active={currentCategory === "quiz"} onClick={() => setCategory("quiz")}>
        Quizy
      </FilterButton>
      <FilterButton active={currentCategory === "interaktywne"} onClick={() => setCategory("interaktywne")}>
        Interaktywne
      </FilterButton>
      <FilterButton active={currentCategory === "prezentacja"} onClick={() => setCategory("prezentacja")}>
        Prezentacje
      </FilterButton>
      <FilterButton active={currentCategory === "komunikacja"} onClick={() => setCategory("komunikacja")}>
        Komunikacja
      </FilterButton>
      <FilterButton active={currentCategory === "inne"} onClick={() => setCategory("inne")}>
        Inne
      </FilterButton>
    </div>
  )
}

interface FilterButtonProps {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}

function FilterButton({ children, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
      }`}
    >
      {children}
    </button>
  )
}
