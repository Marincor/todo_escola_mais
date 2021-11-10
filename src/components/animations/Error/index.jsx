import Lottie from "react-lottie";
import { Icon } from "../../UI";
import {  defaultOptions2 } from "../config";
import TodoImg from '../../../assets/img/to do.jpg'
import { BoxAnimation, Title } from "../styles";


export default function ErrorAnimation() {
  return (
    <BoxAnimation>
        <Title> 404 - Não encontramos o que você buscava. Volte para a pagina inicial!</Title>
      <Icon src={TodoImg} alt="toDo-icon" />
      <Lottie options={defaultOptions2} height={300} width={300} />
    </BoxAnimation>
  );
}
