export default function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div
      className="
      group
      bg-white/5
      border
      border-white/10
      hover:border-cyan-400/30
      rounded-3xl
      p-6
      backdrop-blur-xl
      hover:-translate-y-2
      transition-all
      duration-500
      "
    >
      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400
        to-cyan-600
        flex
        items-center
        justify-center
        text-black
        shadow-lg
        shadow-cyan-500/20
        mb-5
        group-hover:rotate-6
        transition-all
        duration-300
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white">
        {title}
      </h3>

      <p className="text-slate-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}