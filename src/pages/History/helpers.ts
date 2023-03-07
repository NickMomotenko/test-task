import receivedIcon from "../../assets/icons/received.svg";
import boughtIcon from "../../assets/icons/bought.svg";
import sentIcon from "../../assets/icons/send.svg";
import exchangedIcon from "../../assets/icons/exchanged.svg";

export const getIconUrl = (type: string) => {
  if (type === "received") {
    return receivedIcon;
  }

  if (type === "exchanged") {
    return exchangedIcon;
  }

  if (type === "sent") {
    return sentIcon;
  }

  if (type === "bought") {
    return boughtIcon;
  }
};

export const getText = (type: string) => {
  if (type === "sent" || type === "received") {
    return "hash";
  }

  if (type === "bought" || type === "exchanged") {
    return "operation";
  }
};
