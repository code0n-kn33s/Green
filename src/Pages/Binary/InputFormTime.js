import React, { useState, useRef, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

export default function InpuForm(params) {
    const [time, setTime] = useState(1);
    const timeInputRef = useRef(null);
  const { t } = useTranslation();

    useEffect(() => {
        params.getFormTime(time)
    }, [time])

    const handleTimeChange = () => {
        setTime(timeInputRef.current.value);

    };

    const incrementTime = () => {
        if (timeInputRef.current) {
            timeInputRef.current.stepUp(1); // Увеличиваем на 1 минуту
            setTime(timeInputRef.current.value);
        }
    };

    const decrementTime = () => {
        if (timeInputRef.current) {
            timeInputRef.current.stepDown(1); // Уменьшаем на 1 минуту
            setTime(timeInputRef.current.value);
        }
    };

    return (
        <div>
            <div className="binary-input-form-wrap">
            <div className="binary-input-form-label"> {t("Time")} ({t("minutes")}): </div>
                <div className="binary-input-form">
                    <button className="binary-input-form-button" onClick={decrementTime}>-</button>
                    <input
                        type="number"
                        ref={timeInputRef}
                        value={time}
                        className="binary-input"
                        onChange={handleTimeChange}
                    />
                    <button className="binary-input-form-button" onClick={incrementTime}>+</button>
                </div>
            </div>
        </div>
    )
}