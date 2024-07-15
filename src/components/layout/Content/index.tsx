import * as types from "./types";
import "./styles.scss";

const Content = (props: types.ContentProps) => {
  return (
    <div className="layout-content">
      {props.children}
    </div>
  );
};

export default Content;
