import { useTranslation } from 'react-i18next';

export const Popup = (props) => {
  const {t} = useTranslation();

    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    const {isVisible, setVisible, setText} = props
    const { tooltip } = useSelector(({ state }) => state)

    const clickDone = () => {
    //   navigate('/profile')
    //   dispatch(closeTooltip())
    }

    return (
      <>
        {isVisible && <div class="tooltip">
           <div>{t("Данные были успешно обновленны")}</div>


            <button
              className="KYS-section__next-page btn btn--primary"
              onClick={setVisible}
              type="button"
            >
              {t("Готово")}
            </button>

        </div>}
      </>
    )
  }

  function GeneralModal(params) {

  }