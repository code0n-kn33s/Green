import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearKissFields, setKiss } from '../../toolkitReducers/actions.slice'

import { useTranslation } from 'react-i18next';
import { ReactComponent as Icon1 } from './Icon1.svg'
import { ReactComponent as Icon2 } from './Icon2.svg'

export default function KYCPage(params) {
  const [previewFile, setPreviewFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { kissFields } = useSelector(state => state.state)
  const dispatch = useDispatch();
  const navigate = useNavigate();
const {t} = useTranslation();
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Получаем первый выбранный файл

    if (file) {
      setPreviewFile(URL.createObjectURL(file)); // Создаем URL для выбранного файла
      setSelectedFile({ selectedFile: file });

    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Здесь вы можете отправить файл на сервер или выполнить другие действия с ним
    } else {
    }
  };
  const clickShow = () => {
    const margedKissFields = {
      name: kissFields.name.value,
      second_name: kissFields.surname.value,
      phone: kissFields.phone.value,
      birth_date: kissFields.birthday.value,
      city: kissFields.city.value,
      country: kissFields.country.value,
      telegram: kissFields.telegram.value, //nety
      document_image: selectedFile
    }

  }
  const clickDone = () => {
    const margedKissFields = {
      name: kissFields.name.value,
      second_name: kissFields.surname.value,
      phone: kissFields.phone.value,
      birth_date: kissFields.birthday.value,
      city: kissFields.city.value,
      country: kissFields.country.value,
      telegram: kissFields.telegram.value, //nety
      document_image: selectedFile
    }
    // user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    // post_code = models.CharField(max_length=20)
    // address = models.CharField(max_length=200)

    dispatch(setKiss(margedKissFields))

  }

  const clickForward = () => {
    dispatch(clearKissFields())
    navigate('/profile/kyc/step1');
  }

  return (
    <div className="form-container form-container--image rel">
      <div className="form-set-image">
        {previewFile && <img src={previewFile} alt="Превью изображения" />}
      </div>

      {!previewFile && <div className="form-container--placeholder">
        <div className="form-container--placeholder-icon-wrapper">
          <Icon1 />
        </div>

        <p className="form-container--placeholder-title">{t("ID-Карта")}</p>
      </div>}

      <input
        type="file"
        id="file-input-2"
        name="id-card"
        onChange={handleFileChange}
      />

      <label htmlFor="file-input-2" className="btn btn--secondary">
        <Icon2 />
        <span onClick={handleUpload}>{t("ЗАГРУЗИТЬ")}</span>
      </label>

      <button type="button" className="file-input-reset hide btn--reset link">
        <span>{t("Удалить файл")}</span>
      </button>
      <div className='kiss-buttons-wrap'>
        <button
          className="KYS-section__next-page btn btn--primary"
          onClick={clickForward}
          role="tab"
          type="button"
          tabIndex="0"
          aria-controls="tabpanel-2"
          aria-selected="false"
        >
          {t("Назад")}
        </button>
        <button
          className="KYS-section__next-page btn btn--primary"
          onClick={clickDone}
          role="tab"
          type="button"
          tabIndex="0"
          aria-controls="tabpanel-2"
          aria-selected="false"
        >
          {t("Готово")}
        </button>

      </div>
    </div>
  );
}
