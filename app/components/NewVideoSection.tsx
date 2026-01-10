import { Zap, Gamepad2, Hand, Plane } from "lucide-react";

export default function NewVideoSection() {
  return (
    <section id="vid" className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= NEXT MATCH ================= */}
        <div className="grid grid-cols-[1.2fr_2fr] items-center mb-28 gap-16">

          {/* LEFT INFO */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Starting – Mar 23, 19:00
            </p>

            <h2 className="text-6xl font-extrabold uppercase leading-none">
              Next
              <br />
              Match
            </h2>

            <p className="mt-4 text-sm text-gray-300">
              FasterUI vs GAMERS
            </p>

            <p className="mt-6 text-sm font-semibold text-red-500">
              ThunderClash Showdown 2024
            </p>
          </div>

          {/* RIGHT VS BLOCK */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-10">

            {/* TEAM A */}
            <div className="flex justify-end">
              <div className="h-[200px] w-[200px] bg-white flex items-center justify-center">
                <div className="h-[120px] w-[120px] bg-red-600 flex items-center justify-center">
                  <Zap size={56} />
                </div>
              </div>
            </div>

            {/* VS */}
            <div className="text-4xl font-extrabold text-red-600">
              VS
            </div>

            {/* TEAM B */}
            <div className="flex justify-start">
              <div className="h-[200px] w-[200px] bg-white flex items-center justify-center">
                <Gamepad2 size={72} className="text-black" />
              </div>
            </div>

          </div>
        </div>

        {/* ================= PREVIOUS MATCHES ================= */}
        <div>
          <h3 className="mb-6 text-xl font-extrabold uppercase">
            Previous 3 Matches
          </h3>

          {/* HEADER LINE */}
          <div className="h-px w-full bg-white/10 mb-2" />

          <div className="space-y-1">
            <MatchRow
              result="L"
              date="Ended – Feb 14, 18:43"
              event="ShadowStrike Invitational"
              left={<Zap size={18} />}
              score="0 - 2"
              right={<Plane size={18} />}
            />

            <MatchRow
              result="W"
              date="Ended – Feb 13, 17:14"
              event="ShadowStrike Invitational"
              left={<Hand size={18} />}
              score="0 - 1"
              right={<Zap size={18} />}
            />

            <MatchRow
              result="W"
              date="Ended – Feb 13, 13:51"
              event="ShadowStrike Invitational"
              left={<Zap size={18} />}
              score="2 - 0"
              right={<span className="text-lg">🍪</span>}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= MATCH ROW ================= */

function MatchRow({
  result,
  date,
  event,
  left,
  score,
  right,
}: {
  result: "W" | "L";
  date: string;
  event: string;
  left: React.ReactNode;
  score: string;
  right: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[40px_220px_1fr_160px_80px_160px] items-center py-4 text-sm border-b border-white/10">
      
      {/* W / L */}
      <span
        className={`font-extrabold ${
          result === "W" ? "text-white" : "text-gray-500"
        }`}
      >
        {result}
      </span>

      {/* DATE */}
      <span className="text-gray-400">{date}</span>

      {/* EVENT */}
      <span className="text-gray-300">{event}</span>

      {/* TEAM A */}
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center bg-red-600">
          {left}
        </span>
        <span>FasterUI</span>
      </div>

      {/* SCORE */}
      <span className="text-center">{score}</span>

      {/* TEAM B */}
      <div className="flex items-center gap-2 justify-end">
        <span>Opponent</span>
        <span className="flex h-8 w-8 items-center justify-center bg-white text-black">
          {right}
        </span>
      </div>

    </div>
  );
}
