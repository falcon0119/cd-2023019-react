import { memo } from "react";

const style = {
  backgroundColor: "#589A8D",
  height: "300px",
  textAlign: "center",
  width: "100%",
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          {" "}
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
