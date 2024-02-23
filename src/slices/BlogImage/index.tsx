import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogImage`.
 */
export type BlogImageProps = SliceComponentProps<Content.BlogImageSlice>;

/**
 * Component for "BlogImage" Slices.
 */
const BlogImage = ({ slice }: BlogImageProps): JSX.Element => {
  return <PrismicImage field={slice.primary.image} imgixParams={{ w: 600 }} />;
};

export default BlogImage;
