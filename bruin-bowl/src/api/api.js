import axios from "axios";

export const getQuestion = async (res) => {
    var config = {
        method: 'get',
        url: 'http://localhost:80/quiz',
        headers: { }
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