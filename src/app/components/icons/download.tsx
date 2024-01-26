type IconProps = {
  color?: string
}

const DownLoad = ({ color }: IconProps) => {
  return (
    <svg width='10' height='17' viewBox='0 0 10 17' fill='none'>
      <path
        d='M5 16.5L0 11.5V10.5H3V0.5H7V10.5H10V11.5L5 16.5Z'
        fill={color || '#97A1AC'}
      />
    </svg>
  )
}

export default DownLoad
