import { EntityMesaDto } from "@dto/mesa/EntityMesa.dto";
import { Show } from '@components/show'
import { useRouter } from "next/router";
interface Iprops {
  data: EntityMesaDto
}

export const Mesa = ({ data }: Iprops) => {

  const { push: Push } = useRouter()
  return (<div
    className={` w-5/6 h-36 mx-auto flex flex-col justify-between ${data.free ? 'bg-green-200' : 'bg-red-200'}`}
    onClick={() => Push(`/atender/${data.id}`)}
  >
    <div className="flex flex-row justify-around ">
      <div>{data.etiqueta}</div>
      <div>{data.mozo || ''}</div>
    </div>

    <Show
      Condition={!data.free}
    >
      <div className="flex flex-row justify-end ">
        <div className="mr-4 flex flex-row gap-4">
          <label>total</label>
          <label>{data.total}</label>
        </div>
      </div>
    </Show>

  </div>)
};
