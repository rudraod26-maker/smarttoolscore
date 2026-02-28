export default function AdBlock({
  label = "Advertisement",
}: {
  label?: string;
}) {
  return (
    <div className="my-12 text-center">
      <div className="text-xs text-gray-400 uppercase tracking-wide mb-3">
        {label}
      </div>

      <div className="bg-gray-100 border border-gray-200 h-32 md:h-40 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-sm">
          Ad Space
        </span>
      </div>
    </div>
  );
}