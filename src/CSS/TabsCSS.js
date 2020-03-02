const CSS = {
  container: {
    height: '200px',
    display: 'flex',
    cursor: 'pointer'
  },

  meowContainerActive: {
    display: 'flex',
    backgroundColor: '#EEAF86',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#F27830'
    }
  },

  meowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
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
    backgroundColor: '#EEAF86',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#F27830'
    }
  },

  pepContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
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