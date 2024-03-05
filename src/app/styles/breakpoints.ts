import Sizes from "../interfaces/sizes.interface";

const size: Sizes = {
  xs: '375px',
  sm: '600px',
  xl: '1440px',
}

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  xl: `(min-width: ${size.xl})`,
}