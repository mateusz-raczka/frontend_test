import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import ButtonOutline from "../../buttons/ButtonOutline";
import "./styles.scss";

const MenuAction = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const replaceString = () => {
    dispatch({
      type: "REPLACE",
    });

    if (state.availableStrings.length === 0) {
      alert("Brak dostępnych stringów do zastąpienia");
    }
  };

  const addString = () => {
    dispatch({
      type: "ADD",
    });

    if (state.availableStrings.length === 0) {
      alert("Brak dostępnych stringów do doklejenia");
    }
  };

  return (
    <div className="menu-action" aria-label="Action buttons">
      <ButtonOutline style={{ border: "light" }} onClick={replaceString}>
        Zastąp
      </ButtonOutline>
      <ButtonOutline style={{ border: "light" }} onClick={addString}>
        Doklej
      </ButtonOutline>
    </div>
  );
};

export default MenuAction;
