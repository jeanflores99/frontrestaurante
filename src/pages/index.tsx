import type { NextPage } from "next";
import { Container } from "@components/container";
import { WrapperMesas } from "@components/mesas";

const Home: NextPage = () => {
  return (
    <Container>
      <WrapperMesas />
    </Container>
  );
};

export default Home;
