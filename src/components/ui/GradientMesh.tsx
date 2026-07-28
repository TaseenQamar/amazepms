export default function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-blob absolute -top-24 right-[12%] h-[28rem] w-[28rem] rounded-full opacity-70 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(155,155,203,0.45), transparent 70%)",
        }}
      />
      <div
        className="animate-blob-slow absolute bottom-[-8rem] left-[8%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,145,114,0.28), transparent 70%)",
          animationDelay: "-5s",
        }}
      />
      <div
        className="animate-blob absolute top-[40%] left-[40%] h-[18rem] w-[18rem] rounded-full opacity-40 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,160,32,0.2), transparent 70%)",
          animationDelay: "-9s",
        }}
      />

      <div className="animate-float absolute left-[8%] top-[18%] h-16 w-16 rounded-full bg-white/90 shadow-[0_18px_40px_-12px_rgba(26,26,92,0.18)] blur-[1px]" />
      <div
        className="animate-float-slow absolute right-[18%] top-[12%] h-28 w-28 rounded-full bg-white/70 shadow-[0_24px_50px_-16px_rgba(26,26,92,0.14)] blur-[2px]"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="animate-float absolute bottom-[22%] left-[22%] h-10 w-10 rounded-full bg-white/80 shadow-[0_12px_30px_-10px_rgba(26,26,92,0.18)]"
        style={{ animationDelay: "-1.2s" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
