const axios = require('axios');

const postData = async () => {
  try {

    let contacts = 
    {
        name: 'luan',
        email: 'luan@gmail.com',
        phone: '3424656',
        createdAt: new Date().toLocaleString(),
    }
    const response = await axios.post('http://localhost:3000/contacts',contacts);

    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

// setInterval(postData, 5000);
postData();