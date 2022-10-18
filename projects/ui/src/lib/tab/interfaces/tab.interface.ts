import { Image } from '../../interface/image.interface';

export interface TabItem {
  /**
   * Identificador do item.
   */
  id: string;
  /**
   * Texto que será exibido no Tab.
   */
  text?: string;
  /**
   * Imagem que será utilizada no Tab.
   */
  img?: Image;
  /**
   * Atribui o item como selecionado.
   */
  selected?: boolean;
  /**
   * Deixa o item desabilitado.
   */
  disabled?: boolean;
  /**
   * Armazena informações que serão retornadas quando o usuário clicar o item.
   */
  options?: any;
}
