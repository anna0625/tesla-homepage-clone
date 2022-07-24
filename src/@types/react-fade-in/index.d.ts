/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-duplicates */

import { JsxElement } from "typescript";

interface Props {
  delay?: number;
  visible?: boolean;
}

declare module "react-fade-in" {
  export const FadeIn: JsxElement<Props> = () => null;
}
