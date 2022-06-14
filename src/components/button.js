import PropTypes from "prop-types";
import styles from "./Button.module.css";
//css 모듈을 가져옴

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string.isRequired, //Button 함수의 prop 값 체크
};
export default Button;
//export = 다른 js파일에서 해당 함수를 가져올 수 있도록 하기 위함
