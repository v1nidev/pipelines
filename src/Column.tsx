export interface ColumnProps {
  title: string;
  color: string;
}

function Column({ title, color }: ColumnProps) {
  return (
    <section className={`pt-2.5 px-1.5 min-w-[225px] rounded-xl bg-${color}-50`}>
      <div className="px-2">
        <span className={`uppercase text-sm font-bold text-${color}-900`}>
          {title}
        </span>
        <div className={`mt-3 w-[55%] h-[23px] rounded-xl bg-${color}-200`}>
          <div className={`w-[38%] h-full rounded-xl bg-${color}-300`} />
        </div>
      </div>
      <div
        className={`mt-2 border-2 border-${color}-100 min-h-[175px] rounded-lg`}
      />
    </section>
  );
}

export { Column };
