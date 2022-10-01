import type { NextPage } from "next";
import { Container } from "@components/container";
import { GetMesas } from '@components/mesas/api'
import { wrapper } from '@store/store'
import { MesaActions } from '@store/modules/mesa/MesaSlice'
import { Store } from "redux";
import { WrapperMesas } from "@components/mesas";

const Atender: NextPage = () => {
  return (
    <Container>
      <WrapperMesas />
    </Container>
  );
};

export default Atender;

export const getServerSideProps = wrapper.getServerSideProps((store: Store) => async (ctx: any) => {
  const Mesas = await GetMesas()
  store.dispatch(MesaActions.fill(Mesas))
  return {
    props: {
    }
  }
})
