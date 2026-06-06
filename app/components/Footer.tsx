export default function Footer() {
  return (
    <footer className="border-t border-emerald-200/80 bg-emerald-50/70 pt-4 backdrop-blur-sm">
      {/* Institute name + address */}
      <div className="mx-auto max-w-7xl px-4 py-3 text-center sm:px-6">
        <p className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-950 sm:text-[11px] sm:tracking-widest">
          Invent Institute of Mathematics &amp; Science
        </p>
        <p className="mt-1 text-[9px] uppercase tracking-wide leading-snug text-emerald-900/65 sm:text-[10px]">
          560, White House, 40 Feet Road, Arul Nagar, Nandhivaram, Guduvanchery,
          Chengalpet District, Tamilnadu - 603202
        </p>
      </div>

      {/* Bottom bar — copyright + powered by */}
      <div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-2.5 sm:flex-row sm:justify-between sm:px-6">
          <p className="text-center text-[9px] font-bold uppercase tracking-wide text-emerald-900/70 sm:tracking-widest">
            Copyright &copy;{new Date().getFullYear()} &ensp;Invent Institute of
            Mathematics &amp; Science — All Rights Reserved.
          </p>
          <p className="text-[9px] font-bold uppercase tracking-wide text-emerald-900/70 sm:tracking-widest">
            Powered and Managed by IT Department of Invent IMS
          </p>
        </div>
      </div>
    </footer>
  );
}
