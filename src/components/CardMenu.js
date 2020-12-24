import '../styles/_cardMenu.scss';
import FavoriteIcon from "@material-ui/icons/Favorite"
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import TelegramIcon from "@material-ui/icons/Telegram"
import BookmarkBorderTwoToneIcon from '@material-ui/icons/BookmarkBorderTwoTone';
import {IconButton} from "@material-ui/core"
function CardMenu() {
    return (
        <div className="cardMenu">
      <div className="interactions">
      <IconButton className="icon">
                   <FavoriteIcon />
               </IconButton>
               <IconButton className="icon">
               <ChatBubbleOutlineTwoToneIcon />
               </IconButton>
               <IconButton className="icon">
                   <TelegramIcon />
               </IconButton>
               <IconButton className="icon">
               <BookmarkBorderTwoToneIcon /> 
               </IconButton>
               </div>
               </div>
  );
}
export default CardMenu

