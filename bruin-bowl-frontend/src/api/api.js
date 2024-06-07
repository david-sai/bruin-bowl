import axios from "axios";

export const getQuestion = async (category, res) => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/quiz?category=' + category,
    headers: {}
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      res({ error: error });
    });
};

export const searchQuestion = async (keyword, res) => {
  let data = JSON.stringify({
    "keyword": keyword
  });

  let config = {
    method: 'post',
    url: 'http://localhost:4000/quiz/search',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      res({ error: error });
    });
};


export const createQuestion = async (data, res) => {

  let config = {
    method: 'post',
    url: 'http://localhost:4000/quiz/create',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      res({ error: error });
    });
};

export const signup = async (username, password, avatar, res) => {
  let data = JSON.stringify({
    "username": username,
    "password": password,
    "avatar": avatar
  });

  let config = {
    method: 'post',
    url: 'http://localhost:4000/user/signup',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      res({ error: error });
    });
};

export const signin = async (username, password, res) => {
  let data = JSON.stringify({
    "username": username,
    "password": password
  });

  let config = {
    method: 'post',
    url: 'http://localhost:4000/user/signin',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      res({ error: error });
    });
};

export const getUser = async (username, res) => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/user/get?username=' + username,
    headers: {}
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      res({ error: error });
    });
};

export const updateScore = async (username, amount, res) => {
  let data = JSON.stringify({
    "username" : username,
    "amount" : amount
  });

  let config = {
    method: 'post',
    url: 'http://localhost:4000/user/updateScore',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)   //uses axios to send the HTTP request w/ specified config
  .then(function (response) { //if successful, data is passed back to callback fn res
    res(response.data);
  })
  .catch(function (error) { //if error occurs, logs the error to consol and passes an error to fn res
    res({ error: error });
  });
}

export const getLeaderBoard = async(res) => {
  let config = {
    method: 'get',
    url: 'http://localhost:4000/user/leaderboard',
    headers: {},
  };
  axios(config)   //uses axios to send the HTTP request w/ specified config
  .then(function (response) { //if successful, data is passed back to callback fn res
    res(response.data);
  })
  .catch(function (error) { //if error occurs, logs the error to consol and passes an error to fn res
    res({ error: error });
  });
}
