import { Button as AntdButton, ButtonProps } from 'antd';

interface IButtonProps extends ButtonProps {}
function Square(props: IButtonProps) {
  return <AntdButton>{props.children}</AntdButton>;
}

const Button = {
  Square,
};

export default Button;
