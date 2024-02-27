import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { FavoriteRounded } from "@mui/icons-material";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const style = useStyle();

  return (
    <IconButton
      sx={{ ...style.button }}
      onClick={() => setLiked((prev) => !prev)}
    >
      {!liked ? (
        <FavoriteBorderIcon sx={{ ...style.unliked }} />
      ) : (
        <FavoriteRounded sx={{ ...style.liked }} />
      )}
    </IconButton>
  );
}

export default LikeButton;

const useStyle = () => {
  return {
    unliked: {
      color: "black",
      width: "20px",
      height: "20px",
    },
    liked: {
      color: "green",
      width: "20px",
      height: "20px",
    },
    button: {
      backgroundColor: "whitesmoke",
      marginTop: 0.7,
      marginRight: 0.6,
      borderRadius: "50%",
      padding: 0.5,
    },
  };
};
