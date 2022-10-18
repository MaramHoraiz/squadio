import Button from "components/common/Button/Button";

export default function PlaceOrder({}) {
  return (
    <div
      className="flex"
      style={{
        justifyContent: "flex-start",
      }}
    >
      <Button
        label={"Place order now"}
        value={"Place order now"}
        classes={"green-bg white"}
      ></Button>
      <Button
        label={"Call Us"}
        value={"Call Us"}
        classes={"blue-bg white marginL10"}
      ></Button>
      <p className="grey">We are 24/7 available</p>
    </div>
  );
}
