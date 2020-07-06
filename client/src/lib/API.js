import axios from 'axios';

export default {
    Users: {
        login: function (email, password) {
            // return axios.post('/api/users/login', {email, password})
            if (password === 'test') {
                return { email, password }
            }
            return "504"
        }
    },
  // Gets all cards
  getCards: function () {
        return axios.get("/api/post");
    },
    getBeers: function (id) {
        return axios.get("/api/post/" + id);
    },
    // Gets the book with the given id
    getCard: function (id) {
        return axios.get("/api/post/" + id);
    },
    // Deletes the book with the given id
    deleteCard: function (id) {
        return axios.delete("/api/post/" + id);
    },
    // Saves a book to the database
    saveCard: function (cardData) {
        return axios.post("/api/post", cardData);
    },
    updateBeer: function (beerData) {
        return axios.post("/api/post" + beerData.id, beerData);
    }

};
