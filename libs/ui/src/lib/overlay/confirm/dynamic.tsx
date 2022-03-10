import ReactDOM, { createPortal } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react"
import Confirm from "./confirm";
import { ConfirmProps } from "./types";
import { theme } from "@ui";

function confirm(props: ConfirmProps) {
  const el = document.createElement("div");
  document.body.appendChild(el);

  const unmount = () => ReactDOM.unmountComponentAtNode(el);

  const render = async (props: ConfirmProps) => {
    ReactDOM.render(
      <ChakraProvider theme={theme}>
        <Confirm {...props} />
      </ChakraProvider>, 
      el
    );
  };

  render({
    ...props,
    onConfirm: () => {
      props.onConfirm()
      unmount()
    },
    defaultIsOpen: true,
    onCancel: unmount,
  });
}

export default confirm;
