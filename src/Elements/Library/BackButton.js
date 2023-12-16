import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow-left.svg';


export default function BackButton(params) {
    const history = useNavigate()

    const handleGoBack = () => {
        history(-1);
    };

    return (
        <div className="back-button" onClick={handleGoBack}><ArrowIcon/></div>
    )
}