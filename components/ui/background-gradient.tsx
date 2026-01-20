export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,rgba(96,165,250,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_500px,rgba(244,114,182,0.4),transparent)]" />
    </div>
  );
}

export function BackgroundGradientWithGrid() {
  return (
    <div className="absolute inset-0 -z-10 bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_200px,#38bdf8,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] bg-[size:18px_18px]" />
    </div>
  );
}