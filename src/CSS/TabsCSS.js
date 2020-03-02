const CSS = {
  container: {
    height: '200px',
    display: 'flex',
    cursor: 'pointer'
  },

  meowContainerActive: {
    display: 'flex',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    '&:hover': {
      backgroundColor: 'gray'
    }
  },

  meowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    '&:hover': {
      backgroundColor: 'grey'
    }
  },

  meow: {
    margin: '0',
    fontSize: '75px',
  },

  pepContainerActive: {
    display: 'flex',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    '&:hover': {
      backgroundColor: 'grey'
    }
  },

  pepContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    '&:hover': {
      backgroundColor: 'grey'
    }
  },

  pep: {
    margin: '0',
    fontSize: '75px',
  }
};

export default CSS;