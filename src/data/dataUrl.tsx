import { IconType, IconBaseProps } from "react-icons";
import { FiAirplay, FiDatabase ,FiEdit3} from "react-icons/fi";

export const DataUrl: IDataUrl[] = [
  {
    name: "Inicio",
    icon: (props: IconBaseProps) => <FiAirplay {...props} />,
    url: "/",
  },
  {
    name: "Atender",
    icon: (props: IconBaseProps) => <FiEdit3 {...props} />,
    url: "/atender",
  },
  {
    name: "Mantenedor",
    icon: (props: IconBaseProps) => <FiDatabase {...props} />,
    url: "/mantenedor",
  },
];

export interface IDataUrl {
  name: string;
  url: string;
  icon: IconType;
  description?: string;
}
