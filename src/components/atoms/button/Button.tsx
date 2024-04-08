import { Button as AntdButton, ButtonProps } from 'antd';
import { withAntdConfig } from '../../useAntdConfig';

interface IButtonProps extends ButtonProps {}
function Square(props: IButtonProps) {
  return <AntdButton>{props.children}</AntdButton>;
}

const Button = {
  Square: withAntdConfig(Square),
};

export default Button;
