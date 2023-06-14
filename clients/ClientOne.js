const axios = require('axios');

const getData = async () => {

  try {
    const response = await axios.get('http://localhost:3000/contacts');

    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Erro na solicitação:', error.response.data);
    } else {
      console.error('Erro na solicitação:', error.message);
    }
  }
};

// setInterval(getData, 5000);
getData();

const getDataId = async () => {
  try {
    const response = await axios.get('http://localhost:3000/contacts/1');
    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Erro na solicitação:', error.response.data);
    } else {
      console.error('Erro na solicitação:', error.message);
    }
  }
};

// getDataId();