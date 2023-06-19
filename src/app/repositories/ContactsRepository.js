let contacts = [
    {
        id: 1,
        name: 'Joao',
        email: 'joao@gmail.com',
        phone: '3424656',
        createdAt: new Date().toLocaleString(),
    },
    {
        id: 2,
        name: 'Tiao Gaviao',
        email: 'gaviaotiao@gmail.com',
        phone: '999999999',
        createdAt: new Date().toLocaleString(),
    },
];

class ContactsRepository{

    getContacts(){
        return contacts;
    }

    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }
   
    findById(id){
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id == id),
        ));
    }

    findByEmail(email){
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email === email),
        ));
    }

    delete(id){
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id != id); 
            resolve();
        });
    }

    create({name, email, phone, createdAt}){

        const maxId = Math.max(...contacts.map((contact) => contact.id));

        const nextId = maxId + 1;

        return new Promise((resolve) => {
            const newContact = {
                id:nextId,
                name,
                email,
                phone,
                createdAt: new Date().toLocaleString(),
            };

            contacts.push(newContact);

            resolve(newContact);
        });
    }

    update(id, {name, email, phone, createdAt}){
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                createdAt,
            };

            contacts = contacts.map((contact) => (
                contact.id == id ? updatedContact : contact
            ));

            resolve(updatedContact);
        });
    }
}

module.exports = new ContactsRepository();

