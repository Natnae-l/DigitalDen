import { useContext } from "react";
import CartContext, {
  CartContextType,
} from "../../../context/Cart/CartContext";
import { MdCloseFullscreen } from "react-icons/md";
import { Container } from "@mui/material";

export default function FullScreenDialog() {
  const { setOpenDialog } = useContext(CartContext) as CartContextType;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Container
        sx={{
          ".css-1fu2e3p-MuiPaper-root-MuiDialog-paper": {
            borderRadius: ".5rem",
            padding: "20px 20px !important",
          },
        }}
        className="cart-container"
      >
        <MdCloseFullscreen
          size="25"
          onClick={handleClose}
          style={{ alignSelf: "end", cursor: "pointer" }}
        />
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
      </Container>
    </>
  );
}
