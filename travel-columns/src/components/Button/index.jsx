import { Button } from "./sytle";

export function StyledButton({ children, fontColor }) {
  return <Button fontColor={fontColor}>{children}</Button>;
}
