import { FC } from "react";
import classes from "./SendButton.module.scss";

interface SendButtonProps {}

export const SendButton: FC<SendButtonProps> = () => (
  <button className={classes.sendButton}>Отправить</button>
);
