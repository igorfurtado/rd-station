import { Darker_Grotesque, Nunito_Sans, Red_Hat_Display } from 'next/font/google'

import { DefaultFonts, FontStyle } from '../components/typography/types'

const nunito = Nunito_Sans({ subsets: ['latin'] })
const grotesque = Darker_Grotesque({ subsets: ['latin'] })
const redHat = Red_Hat_Display({ subsets: ['latin'] })

export const colors = {
  primary: '#4839A3',
  'primary-1': '#6C5AE0',
  'primary+1': '#100C27',
  secondary: '#F2BF4E',
  'secondary-1': '#F4CA6D',
  dark: '#212429',
  gray: '#7E8A98',
  'gray-1': '#97A1AC',
  disabled: '#CFD3D8',
  light: '#FFFFFF',
  'light+1': '#F1F3F5'
}

export const fonts = {
  family: {
    Nunito_Sans: `${nunito.style.fontFamily}, sans-serif`,
    Darker_Grotesque: `${grotesque.style.fontFamily}, sans-serif`,
    Red_Hat_Display: `${redHat.style.fontFamily}, sans-serif`
  }
}

export const fontsReferences = ({
  type = DefaultFonts.bodyMd,
  mobile = false
}: {
  type: keyof typeof DefaultFonts
  mobile?: boolean
}): FontStyle => {
  const defaultStyles = (mobile: boolean) => ({
    headingLg: {
      fontFamily: 'Darker_Grotesque',
      fontSize: mobile ? '40px' : '56px',
      lineHeight: '100%',
      fontWeight: '900'
    },
    headingMd: {
      fontFamily: 'Darker_Grotesque',
      fontSize: mobile ? '32px' : '40px',
      lineHeight: '100%',
      fontWeight: '900'
    },
    headingSm: {
      fontFamily: 'Darker_Grotesque',
      fontSize: mobile ? '24px' : '32px',
      lineHeight: '110%',
      fontWeight: '900'
    },
    headingXs: {
      fontFamily: 'Darker_Grotesque',
      fontSize: mobile ? '20px' : '24px',
      lineHeight: '110%',
      fontWeight: '700'
    },
    subtitleSm: {
      fontFamily: 'Nunito_Sans',
      fontSize: mobile ? '16px' : '20px',
      lineHeight: '140%',
      fontWeight: '400'
    },
    subtitleXs: {
      fontFamily: 'Nunito_Sans',
      fontSize: '14px',
      lineHeight: '120%',
      fontWeight: '400'
    },
    bodyLg: {
      fontFamily: 'Nunito_Sans',
      fontSize: '20px',
      lineHeight: '150%',
      fontWeight: '400'
    },
    bodyMd: {
      fontFamily: 'Nunito_Sans',
      fontSize: '16px',
      lineHeight: '150%',
      fontWeight: '400'
    },
    bodySm: {
      fontFamily: 'Nunito_Sans',
      fontSize: '14px',
      lineHeight: '150%',
      fontWeight: '400'
    }
  })

  return defaultStyles(mobile)[type]
}
