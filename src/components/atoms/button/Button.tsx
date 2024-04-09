import { Button as AntdButton, ButtonProps } from 'antd';
import { withAntdConfig } from '../../withAntdConfigProvider';
import { withThemeProvider } from '../../withThemeProvider';

interface IButtonProps extends ButtonProps {}
function Square(props: IButtonProps) {
  return <AntdButton>{props.children}</AntdButton>;
}

const Button = {
  Square: withThemeProvider(withAntdConfig(Square)),
};

export default Button;
