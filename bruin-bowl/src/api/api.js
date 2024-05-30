import axios from "axios";

export const getQuestion = async (res) => {
  var config = {
    method: 'get',
    url: 'http://localhost:80/quiz',
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
    url: 'http://localhost:80/quiz/search',
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
    url: 'http://localhost:80/user/signup',
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