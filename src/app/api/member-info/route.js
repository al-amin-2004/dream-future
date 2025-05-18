import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://opensheet.elk.sh/1WolMk3HP-ibAEtfHJ6IS24ODjjfo3yWcSrDexI4Vh6Y/member-info"
  );
  const data = await res.json();
  return NextResponse.json(data);
}
