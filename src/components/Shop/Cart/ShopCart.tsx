import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useContext } from "react";
import CartContext, {
  CartContextType,
} from "../../../context/Cart/CartContext";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const { openDialog, setOpenDialog } = useContext(
    CartContext
  ) as CartContextType;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <IconButton
          onClick={handleClose}
          aria-label="close"
          sx={{ width: "100px" }}
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </>
  );
}
