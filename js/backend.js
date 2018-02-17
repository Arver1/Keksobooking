let load = (URL, onLoad, onError) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      onLoad(xhr.response);
    } else {
      onError('Статус ответа: ' + xhr.status + '' + xhr.statusText);
    }
  });
  xhr.addEventListener('error', () => {
    onError('Произошла ошибка соединения');
  });
  xhr.addEventListener('timeout', () => {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });
  xhr.timeout = 10000;
  xhr.open('GET', URL, true);
  xhr.send();
};
let save = (URL, data, onSuccess, onError) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    onSuccess();
  });
  xhr.addEventListener('error', () => {
    onError('Произошла ошибка соединения');
  });
  xhr.open('POST', URL, true);
  xhr.send(data);
};


export {load, save};
