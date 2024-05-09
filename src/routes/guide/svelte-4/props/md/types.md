type TitleType = {
  id?: string;
  title?: string;
};

type DescType = {
  id?: string;
  desc?: string;
};

interface BaseProps {
  size?: string;
  role?: string;
  color?: string;
  withEvents?: boolean;
  onclick?: (event: MouseEvent) => void;
  onkeydown?: (event: KeyboardEvent) => void;
  onkeyup?: (event: KeyboardEvent) => void;
  class?: string;
}

interface CtxType extends BaseProps {}

interface Props extends BaseProps{
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}