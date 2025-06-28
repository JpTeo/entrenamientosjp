import { redirectWhatsApp } from "../../utils/ContactsRedirect";
import { ButtonWhatsAps } from "./style";
import { WhatsAppOutlined } from "@ant-design/icons";

const WhatsAppButton = () => {
  return (
    <ButtonWhatsAps onClick={redirectWhatsApp}>
      <WhatsAppOutlined twoToneColor="#0D817E" />
    </ButtonWhatsAps>
  );
};

export default WhatsAppButton;
