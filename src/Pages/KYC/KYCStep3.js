import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Icon1 } from './Icon1.svg'
import { ReactComponent as Icon2 } from './Icon2.svg'

export default function KYCPage(params) {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate()
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Получаем первый выбранный файл

    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Создаем URL для выбранного файла
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Здесь вы можете отправить файл на сервер или выполнить другие действия с ним
      console.log('Загружен файл:', selectedFile.name);
    } else {
      console.log('Файл не выбран');
    }
  };

  const clickDone = () => {
    console.log('params :>> ', params);

    
  }

  const clickForward = () => {
    navigate('/profile/kyc/step1');
  }

  return (
    <div className="form-container form-container--image rel">
      <div className="form-set-image">
        {selectedFile && <img src={selectedFile} alt="Превью изображения" />}
      </div>

      <div className="form-container--placeholder">
        <div className="form-container--placeholder-icon-wrapper">
          <Icon1 />
        </div>

        <p className="form-container--placeholder-title">ID-Карта</p>
      </div>

      <input
        type="file"
        id="file-input-2"
        name="id-card"
        onChange={handleFileChange}
      />

      <label htmlFor="file-input-2" className="btn btn--secondary">
        <Icon2 />
        <span onClick={handleUpload}>ЗАГРУЗИТЬ</span>
      </label>

      <button type="button" className="file-input-reset hide btn--reset link">
        <span>Удалить файл</span>
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
          Назад
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
          Готово
        </button>

      </div>
    </div>
  );
}
