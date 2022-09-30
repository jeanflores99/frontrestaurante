import type { NextPage } from "next";
import { Container } from "@components/container";
import { WrapperMesas } from "@components/mesas";
import { GetMesas } from '@components/mesas/api'
import { wrapper } from '@store/store'
// import { useDispatch } from 'react-redux'
import { MesaActions } from '@store/modules/mesa/MesaSlice'
import { Store } from "redux";

const Home: NextPage = () => {
  return (
    <Container>
      <WrapperMesas />
    </Container>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps((store: Store) => async (ctx: any) => {
  const Mesas = await GetMesas()
  store.dispatch(MesaActions.fill(Mesas))
  return {
    props: {
    }
  }
})
