import { Image } from '../../interface/image.interface';

export interface TabItem {
  id: string;
  text?: string;
  img?: Image;
  href?: string;
  selected?: boolean;
  disabled?: boolean;
}
