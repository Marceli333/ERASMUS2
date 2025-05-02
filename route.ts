import { NextResponse } from "next/server"
import { apps } from "@/data/apps"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  if (category && category !== "all") {
    const filteredApps = apps.filter((app) => app.category === category)
    return NextResponse.json(filteredApps)
  }

  return NextResponse.json(apps)
}
