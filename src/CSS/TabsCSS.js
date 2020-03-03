const CSS = {
  container: {
    height: '200px',
    display: 'flex',
    cursor: 'pointer'
  },

  meowContainerActive: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },

  meowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEAF86',
    width: '50%',
    boxShadow: '-10px -10px 10px -10px black inset',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#F27830'
    }
  },

  meow: {
    margin: '0',
    fontSize: '75px',
  },

  pepContainerActive: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },

  pepContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEAF86',
    width: '50%',
    boxShadow: '10px -10px 10px -10px black inset',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#F27830'
    }
  },

  pep: {
    margin: '0',
    fontSize: '75px',
  }
};

export default CSS;