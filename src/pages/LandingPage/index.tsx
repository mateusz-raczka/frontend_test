import { useContext } from "react";
import ContainerTitled from "../../components/containers/ContainerTitled";
import Form from "../../components/forms/Form";
import Content from "../../components/layout/Content";
import Title from "../../components/layout/Title";
import MenuAction from "../../components/menus/MenuAction";
import "./styles.scss";
import { GlobalContext } from "../../contexts/GlobalContext";

const LandingPage = () => {
  const { state } = useContext(GlobalContext);

  return (
    <main className="layout-page-landing">
      <Title content="Nagłówek H1" />
      <Content>
        <ContainerTitled title="BLOK PIERWSZY" croppedTitleIfTooLong={false}>
          <Form></Form>
        </ContainerTitled>
        <ContainerTitled title="BLOK DRUGI" croppedTitleIfTooLong={false}>
          <MenuAction></MenuAction>
        </ContainerTitled>
        <ContainerTitled title="BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ..." croppedTitleIfTooLong={true}>
          <p>
            {state.usedStrings.map((string) => <span key={crypto.randomUUID()}>{string} </span>)}
          </p>
        </ContainerTitled>
      </Content>
    </main>
  );
};

export default LandingPage;
