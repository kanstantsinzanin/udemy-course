import styles from "./Up.module.css";
import cn from "classnames";
import UpIcon from "./up.svg";
import { Button } from "..";
import { useScrollY } from "../../hooks/useScrollY";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.documentElement.clientHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{opacity: 0}}
    >
      <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop}/>
    </motion.div>
  );
};