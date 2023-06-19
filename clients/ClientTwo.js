const axios = require('axios');

const postData = async () => {
  try {

    let contacts = 
    {
        name: 'luan',
        email: 'luan@gmail.com',
        phone: '3424656',
    }
    const response = await axios.post('http://localhost:3000/contacts',contacts);

    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

// postData();

const putData = async () => {
  try {

    let contacts = 
    {
        name: 'luan',
        email: 'luan@gmail.com',
        phone: '3424656',
        createdAt:new Date().toLocaleString(),
    }

    const id = 1;

    const response = await axios.put(`http://localhost:3000/contacts/${id}`,contacts);

    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

putData();

const deleteData = async () => {
  try {

    const response = await axios.delete('http://localhost:3000/contacts/2');

    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

// deleteData();