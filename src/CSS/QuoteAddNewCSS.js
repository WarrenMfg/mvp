const CSS = {
  form: {
    display: 'grid',
    gridTemplateRows: '1.25fr 0.75fr',
    gridTemplateAreas: '"textarea" "studentCohort"',
    height: '200px',
  },

  divTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'textarea'
  },

  saySomething: {
    margin: '0 10px',
    fontSize: '40px'
  },

  textarea: {
    width: '400px',
    height: '60px',
    fontSize: '20px',
    resize: 'none',
    borderRadius: '10px',
    border: '1px solid black',
    padding: '10px 10px',
    '&:focus': {
      boxShadow: '0 0 5px #F2522E inset'
    }
  },

  divBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gridArea: 'studentCohort'
  },

  student: {
    margin: '0 10px',
    fontSize: '25px'
  },

  studentInput: {
    height: '30px',
    width: '200px',
    borderRadius: '10px',
    fontSize: '16px',
    border: '1px solid black',
    padding: '0 10px',
    '&:focus': {
      boxShadow: '0 0 5px #F2522E inset'
    }
  },

  cohort: {
    margin: '0 10px 0 20px',
    fontSize: '25px'
  },

  cohortInput: {
    height: '30px',
    width: '200px',
    borderRadius: '10px',
    fontSize: '16px',
    border: '1px solid black',
    padding: '0 10px',
    '&:focus': {
      boxShadow: '0 0 5px #F2522E inset'
    }
  },

  button: {
    marginLeft: '20px',
    width: '100px',
    height: '32px',
    backgroundcolor: 'white',
    border: '1px solid black',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    '&:focus': {
      backgroundColor: '#011C33',
      color: 'white'
    },
    '&:hover': {
      backgroundColor: '#011C33',
      color: 'white',
      cursor: 'pointer'
    }
  }
};

export default CSS;