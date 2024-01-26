import { colors } from '@/app/styles/references'

type iconProps = {
  color?: string
}

const ReturnArrow = ({ color }: iconProps) => {
  return (
    <svg width='7' height='11' viewBox='0 0 7 11' fill='none'>
      <path
        d='M1.09229 5.88862L5.54272 10.339C5.75736 10.5537 6.10534 10.5537 6.31996 10.339L6.83903 9.81995C7.0533 9.60568 7.05371 9.25841 6.83994 9.04363L3.3129 5.49999L6.83994 1.95637C7.05371 1.74159 7.0533 1.39432 6.83903 1.18005L6.31996 0.660979C6.10532 0.44634 5.75733 0.44634 5.54272 0.660979L1.09232 5.11138C0.877678 5.326 0.877678 5.67398 1.09229 5.88862Z'
        fill={`${color || colors.light}`}
      />
    </svg>
  )
}

export default ReturnArrow
