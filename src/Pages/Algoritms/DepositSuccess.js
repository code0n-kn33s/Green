import { useTranslation } from 'react-i18next';
export default function DepositSuccess(props) {
    const clickDone = () => {
        props.switchDone(false)
        props.setModalState()
    }
    const {t} = useTranslation();
    return (
        <div class="modal-dialog__success-wrapper">
            <div class="modal-dialog__success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="138" viewBox="0 0 138 138" fill="none">
                    <g clipPath="url(#clip0_101_1867)">
                        <path d="M94.8767 43.6763L61.4808 77.6931L44.3688 60.5121L35.1919 69.6893L62.1707 96.5993L105.503 54.5784L94.8767 43.6763Z" fill="#FFF831" />
                        <path d="M68.9998 0C30.8925 0 0 30.8925 0 68.9998C0 107.107 30.8925 138 68.9998 138C107.107 138 138 107.107 138 68.9998C138 30.8925 107.108 0 68.9998 0ZM68.9998 125.511C37.7898 125.511 12.4889 100.21 12.4889 68.9998C12.4889 37.7898 37.7898 12.4889 68.9998 12.4889C100.194 12.5267 125.473 37.8053 125.511 68.9998C125.511 100.21 100.21 125.511 68.9998 125.511Z" fill="#FFF831" />
                    </g>
                    <defs>
                        <clipPath id="clip0_101_1867">
                            <rect width="138" height="138" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <h2 class="modal-dialog__success-heading bold">
                {t("Внимание!")}
            </h2>

            <p class="modal-dialog__success-description bold">
                {t("Транзакции занимают некоторое время. В зависимости от загрузки сети средства появятся у Вас на балансе!")}
            </p>

            <button onClick={clickDone} class="modal-dialog__success-btn btn btn--primary btn--large" type="button" data-close-popup>
                {t("ГОТОВО")}
            </button>
        </div>
    )
}