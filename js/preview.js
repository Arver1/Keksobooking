import {FILE_TYPES} from './util';


const fileChooserUserAva = document.querySelector('.notice__photo .drop-zone [type="file"]');
const userAva = document.querySelector('.notice__preview img');
const fileChooserAdImgs = document.querySelector('.form__photo-container .drop-zone [type="file"]');
const AdImgs = document.querySelectorAll('.form__photo-container .form__photo');

fileChooserUserAva.addEventListener('change', () => {
  const file = fileChooserUserAva.files[0];
  if (!file) {
    return;
  }
  if (FILE_TYPES.some((it) => file.type.match(it))) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      userAva.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(file);
  }
});
fileChooserAdImgs.addEventListener('change', () => {
  let files = [...fileChooserAdImgs.files];
  files = files.filter(() => FILE_TYPES.some((it) => files.type.match(it)));
  files = files.length > 16 ? files.slice(-16) : files;
  if (!files) {
    return;
  }
  const reader = new FileReader();
  reader.addEventListener('load', () => {

  });
  reader.readAsDataURL(files);
});
