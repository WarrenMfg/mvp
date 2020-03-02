/*
COLOR THEME

blue: #012340
dark orange: #F2522E
light orange: #F27830
tan: #EEAF86
black: #0D0D0D
*/

const CSS = {
  div: {
    width: '75vw',
    minHeight: '100vh',
    margin: '0 auto',
    backgroundColor: 'white',
    overflowX: 'scroll'
  },

  toTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5vw',
    position: 'fixed',
    bottom: '-10vw',
    right: '15vw',
    transform: 'translate(50%, 0)',
    width: '5vw',
    height: '5vw',
    borderRadius: '5px 5px 0 0',
    backgroundColor: '#EEAF86',
    boxShadow: '0 0 10px black',
    zIndex: '2',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#F27830'
    }
  }
};

export default CSS;