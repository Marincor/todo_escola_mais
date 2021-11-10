import Lottie from "react-lottie";
import { Icon } from "../../UI";
import { defaultOptions } from "../config";
import TodoImg from '../../../assets/img/to do.jpg'
import { BoxAnimation, Title } from "../styles";

export default function LoadingAnimation() {
  return (
    <BoxAnimation>
        <Title> Carregando To Do</Title>
      <Icon src={TodoImg} alt="toDo-icon" />
      <Lottie options={defaultOptions} height={300} width={350} />
    </BoxAnimation>
  );
}
