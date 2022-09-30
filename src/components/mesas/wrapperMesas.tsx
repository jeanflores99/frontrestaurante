import { Mesa } from "@components/mesas";
import { useEffect, useState } from "react";
import { RootState } from '@store/store'
import { useSelector, useDispatch } from 'react-redux'
export const WrapperMesas = () => {
  // const [Mesas, SetMesas] = useState([])
  const Mesas = useSelector((state: RootState) => state.mesa.mesas)
  console.log(Mesas)
  return (
    <div className="flex flex-col gap-2">

      {/* Parte de afuera */}
      <div className="w-full ">
        <label className="my-4 block bg-green-400n text-center">Afuera</label>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 ">
          {Mesas.filter((m) => m.location === 'Afuera' && m.active === true).map((mesa, k) => <Mesa key={k} data={mesa} />)}
        </div>
      </div>

      {/* Parte de adentro */}
      <div className="w-full  relative">
        <label className="my-4 block bg-green-400n text-center">Adentro</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
          {Mesas.filter((m) => m.location === 'Adentro' && m.active === true).map((mesa, k) => <Mesa key={k} data={mesa} />)}
        </div>
      </div>

    </div>
  );
};
