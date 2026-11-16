declare module "@splidejs/react-splide" {
  import type { ComponentPropsWithoutRef, ReactNode } from "react";

  export interface SplideProps extends ComponentPropsWithoutRef<"div"> {
    options?: Record<string, unknown>;
    children?: ReactNode;
  }

  export function Splide(props: SplideProps): ReactNode;
  export function SplideSlide(
    props: ComponentPropsWithoutRef<"li">
  ): ReactNode;
}
