import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Bio`.
 */
export type BioProps = SliceComponentProps<Content.BioSlice>;

/**
 * Component for "Bio" Slices.
 */
const Bio = ({ slice }: BioProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bio (variation: {slice.variation}) Slices
    </section>
  );
};

export default Bio;
