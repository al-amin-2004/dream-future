import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://opensheet.elk.sh/1WolMk3HP-ibAEtfHJ6IS24ODjjfo3yWcSrDexI4Vh6Y/member-info"
  );
  const data = await res.json();

  const users = data.map((user) => {
    const idNumber = user.birthID?.toString() || "";
    const birth = user.birth || "";
    const birthYear = birth.includes("-") ? birth.split("-")[0] : null;

    let uid;

    if (idNumber.length === 17) {
      const year = idNumber.slice(0, 4);
      const last4 = idNumber.slice(-4);
      uid = (parseInt(year) * parseInt(last4))
        .toString()
        .slice(-6)
        .padStart(6, "0");
    } else if (idNumber.length === 10 && birthYear) {
      const year = birthYear.toString();
      const last4 = idNumber.slice(-4);
      uid = (parseInt(year) * parseInt(last4))
        .toString()
        .slice(-6)
        .padStart(6, "0");
    } else {
      uid = undefined;
    }

    return {
      no: user.no,
      name: user.name,
      birthID: Number(user.birthID),
      birth: user.birth,
      mobile: user.mobile,
      email: user.email,
      blood: user.blood,
      bool: ["yes", "true"].includes((user.bool || "").toLowerCase()),
      array: user.array ? JSON.parse(user.array) : [],
      uid,
    };
  });

  return NextResponse.json(data);
}
