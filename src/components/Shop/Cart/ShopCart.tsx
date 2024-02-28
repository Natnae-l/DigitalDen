import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useContext } from "react";
import CartContext, {
  CartContextType,
} from "../../../context/Cart/CartContext";
import { MdCloseFullscreen } from "react-icons/md";

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
        // fullWidth
        maxWidth="lg"
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          ".css-1fu2e3p-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "1.6rem",
            padding: "10px 20px",
          },
        }}
      >
        <IconButton
          title="close"
          onClick={handleClose}
          aria-label="close"
          sx={{ width: "100px", alignSelf: "end" }}
        >
          <MdCloseFullscreen />
        </IconButton>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe id
          aliquid consequatur ea velit assumenda non officia debitis quam ut
          molestiae officiis est at porro veritatis quas, voluptas ab a?
          Suscipit distinctio debitis alias libero doloribus obcaecati eum
          dolorem accusamus vel rem mollitia, amet laboriosam minus esse neque
          recusandae exercitationem blanditiis officiis aperiam omnis error bus
          molestias quia necessitatibus unde dolorem impedit autem. Est
          consequuntur id tempora dolor ratione laborum odio? Expedita sint odit
          eum possimus, officia reiciendis harum non voluptatibus perspiciatis
          incidunt nobis accusamus mollitia fugit quisquam. Error laudantium
          voluptas amet dolore esse corrupti repellat aspernatur enim distinctio
          unde vitae dolor sapiente numquam in, quaerat fugiat, doloribus
          eveniet sunt ullam odio! Aut repellendus alias suscipit minima
          debitis? Corrupti vitae iure facere. Vero dicta possimus ratione amet
          eos! At asperiores veritatis quis, vero ea veniam illo nobis sed
          inventore optio iure. Odit et, libero optio eius dolorem sequi est.
          Saepe exercitationem porro tempore ipsa obcaecati reprehenderit
          laudantium, eos itaque blanditiis ad.
        </p>
      </Dialog>
    </>
  );
}
