import Sizes from "../interfaces/sizes.interface";

const size: Sizes = {
  sm: '600px',
  xl: '1440px',
}

export const device = {
  sm: `(max-width: ${size.sm})`,
  xl: `(max-width: ${size.xl})`,
}