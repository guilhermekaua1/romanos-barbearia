export function Header() {
  return (
    <header className="text-center space-y-4">
      <div className="relative w-24 h-24 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-sm"></div>
        <div className="relative w-full h-full bg-zinc-800 rounded-full border-2 border-amber-500/30 flex items-center justify-center">
          <div className="text-amber-400 text-3xl font-bold">⚔</div>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white tracking-wide">@RomanosBarbearia</h1>
        <div className="space-y-1">
          <p className="text-amber-400 font-medium">Conceito & Elegância</p>
          <p className="text-zinc-300 text-sm">Serviço Personalizado ✂️</p>
          <p className="text-zinc-400 text-sm">Agende Online ou por WhatsApp 👆</p>
        </div>
      </div>
    </header>
  )
}
