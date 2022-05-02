import arrowUp from "../../res/others/arrowUp.svg";

export default function ScrollBackUpButton() {
  const goToPageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-up-container">
      <button className="scroll-up-button" onClick={() => goToPageTop()}>
        <img src={arrowUp} alt="arrowUp" />
      </button>
    </div>
  );
}
