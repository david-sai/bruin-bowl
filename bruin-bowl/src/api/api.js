import axios from "axios";

export const getQuestion = async (category, res) => {
  var config = {
    method: 'get',
    url: 'http://localhost:4000/quiz?category=' + category,
    headers: {}
  };
  axios(config)
    .then(function (response) {
      res(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res({ error: error });
    });
};

export const searchQuestion = async (keyword, res) => {
  var data = JSON.stringify({
    "keyword": keyword
  });

  var config = {
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
      console.log(error);
      res({ error: error });
    });
};

export const signup = async (username, password, res) => {
  var data = JSON.stringify({
    "username": username,
    "password": password
  });

  var config = {
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
      console.log(error);
      res({ error: error });
    });
};

export const signin = async (username, password, res) => {
  var data = JSON.stringify({
    "username": username,
    "password": password
  });

  var config = {
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
      console.log(error);
      res({ error: error });
    });
};