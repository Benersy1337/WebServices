const axios = require('axios');

const getData = async () => {

  try {
    const response = await axios.get('http://localhost:3000/contacts');

    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

// setInterval(postData, 5000);
getData();