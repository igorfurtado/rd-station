import { AnimatePresence, motion } from 'framer-motion'

type CardViewProps = {
  show: boolean
  handleCurrentView: () => void
}

const CardView = ({ show, handleCurrentView }: CardViewProps) => {
  return (
    <AnimatePresence>
      {/* {show && ( */}
      <motion.div
        key='cardsFormView'
        initial={{ x: 0 }}
        animate={{
          x: '100%',
          display: show ? 'flex' : 'none',
          transition: { duration: 2.35 }
        }}
        exit={{
          x: '-100%',
          transition: { duration: 2.35 }
        }}
        style={{
          background: 'green',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <button onClick={handleCurrentView}>cardView</button>
      </motion.div>
      {/* )} */}
    </AnimatePresence>
  )
}

export default CardView
