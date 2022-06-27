const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left"></div>
      {leftChild}
      <div className="head_text">{headText}</div>
      <div className="heae_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
