import React, { useState, useEffect } from 'react';
import ModalDialog from './Modal'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setBetHistory } from '../../toolkitReducers/actions.slice'

const CountdownTimer = ({ expiration_time, id }) => {
    const [targetTime] = useState(new Date(expiration_time));
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [modalText, setModalText] = useState(false)
    const [isModal, setModal] = useState(false)

    const betHistory = useSelector(state => state.state.betHistory)
    const dispatch = useDispatch()
    const { t } = useTranslation();


    const openModal = (text) => {
        setModalText(text)
        setModal(!isModal)
    }

    function calculateTimeRemaining() {
        const now = new Date();
        const difference = targetTime - now + 5000; // Add 5 seconds (5 * 1000 milliseconds)

        // Разница в секундах
        return Math.floor(difference / 1000);
    }

    const handleTimeout = async () => {

        function getToken() {
            const name = 'token=';
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');

            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i];
                while (cookie.charAt(0) === ' ') {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return null;
        }

        function privateFetch(url, options, exclude) {
            let headers = {}
            if (!exclude) {
                headers = {
                    'Content-Type': 'application/json',
                };
            }

            if (getToken()) {
                headers.Authorization = `Token ${getToken()}`;

                return fetch(process.env.REACT_APP_API_URL + url, {
                    ...options,
                    headers,
                });
            }

        };

        const response = await privateFetch('bet_history/')
        const data = await response.json()



        await showModal(data);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = calculateTimeRemaining();
            setTimeRemaining(remaining);

            if (remaining <= 0) {
                clearInterval(timer);
                handleTimeout();
            }
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, [targetTime, dispatch]);



    const showModal = (fetched) => {


        const filteredBet = fetched?.bet_history && fetched.bet_history.find(item => item.id === id);


        if (filteredBet.status === "Win") {
            setModal(true);
            setModalText("You win! Congratulations! ");
        } else if (filteredBet.status === "Lose") {
            setModal(true);
            setModalText("You lose. Next time luck be on your side! ");
        } else if (filteredBet.status === "Pending") {

        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <div>{formatTime(timeRemaining)}</div>
            <ModalDialog modalState={isModal} setModalState={openModal} modalText={modalText} />
        </div>
    );
};

export default CountdownTimer;
