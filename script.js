const urlGet = "db.json";
const urlSend = "https://jsonplaceholder.typicode.com/posts";

// Отправить данные
const sendData = (url, data = {}) => {
  // определить путь
  return fetch(url, {
    // запрос данных с сервера
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    // получаем доступ к данным
  }).then((response) => response.json());
};
// Получить данные
const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

getData(urlGet)
  .then((userData) => {
    sendData(urlSend, userData)
      .then((data) => {
        console.log("Ответ от сервера: ", data);
      })
      .catch((error) => {
        console.log("Ошибка отправки данных: ", error);
      });
  })
  .catch((error) => {
    console.log("Ошибка получения данных: ", error);
  });
