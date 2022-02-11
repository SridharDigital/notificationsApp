const Notification = (props) => {
  const { boxText, boxClass, boxImage } = props;
  return (
    <div className={boxClass + " notification-box"}>
      <img src={boxImage} className="icon" />
      <p className="message">{boxText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Notifications</h1>
      <Notification
        boxText="Information Message"
        boxClass="information"
        boxImage="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />

      <Notification
        boxText="Success Message"
        boxClass="success"
        boxImage="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />

      <Notification
        boxText="Warning Message"
        boxClass="warning"
        boxImage="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />

      <Notification
        boxText="Danger Message"
        boxClass="danger"
        boxImage="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
