import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bg400: string;
      bg500: string;
      bg600?: string;
      bg700?: string;
      wrd400: string;
      wrd500: string;
      wrd600?: string;
      wrd700?: string;
      wrd800?: string;
      wrd900?: string;
      acc: string;
      acc1?: string;
    };
    gradient: {
      blueToPurple: string;
    };
    font: {
      family: string;
    };
  }
}
