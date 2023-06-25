import { Dimensions } from "react-native"

const H = Dimensions.get('window').height
export const Spacings = {
  'verysmall': 3,
  'small': 8,
  'med': 12,
  'large': 16,
  'avoidHeader': H * 0.08,
  'avoidHeaderAndMore': H * 0.5
}