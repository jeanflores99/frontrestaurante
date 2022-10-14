import type { NextPage } from "next";
import Link from 'next/link'
import { Container } from "@components/container";


const Mantenedor: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-row">
        <div>
          <Link href={'/mantenedor/mesa'}>
            <h2 className="cursor-pointer">Administrar Mesas</h2>
          </Link>
        </div>

      </div>

    </Container>
  );
};

export default Mantenedor;

