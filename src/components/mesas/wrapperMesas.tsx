import { Mesa } from "@components/mesas";
export const WrapperMesas = () => {
  const data = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13);
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {/* Parte de adentro */}
      <div className="w-full lg:w-3/5  border-2 relative">
        <label>adentro</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4">
          {data.map((obj, k) => (
            <Mesa key={k} />
          ))}
        </div>
      </div>
      {/* Parte de afuera */}
      <div className="w-ful lg:w-2/5  border-2">afuera</div>
    </div>
  );
};
