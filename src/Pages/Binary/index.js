import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setBinary } from '../../toolkitReducers';

import InputFormTime from './InputFormTime';
import InputFormValue from './InputFormValue';
import UpBet from './UpBet';
import BinaryHeader from './BinaryHeader';
import Transfer from './Transfer';
import Candle from './Candle';
import ModalDialog from './Modal'

import OptionsTable from './OptionsTable'

import { ReactComponent as StartIcon } from './assets/play-round-icon.svg'

const symbols = {
  "BTC/USDT": "BTCUSDT",
  "ETH/USDT": "ETHUSDT",
  "USDT/ETH": "USDTETH",
  "BTC/ETH": "BTCETH",
  "ETH/BTC": "ETHBTC",
  "USDT/BTC": "USDTBTC",
};

export default function Binary(props) {
  const [minutes, setMinutes] = useState("60");
  const [selectedPair, setSelectedPair] = useState(Object.keys(symbols)[0]); // Используем первый ключ по умолчанию
  const [singlePair, setSinglePair] = useState("BTC");
  const [payout, setPayout] = useState(0);
  const [investment, setInvestment] = useState(null);
  const [formTime, setFormTime] = useState(null);
  const [upDownValue, setUpDownValue] = useState(null);
  const [pairFetchValue, setPairFetchValue] = useState(null);
  const [percentCoefficient, setPercentCoefficient] = useState("80%");
  const [isErrors, setErrors] = useState([])
  const [freeBalance, setFreeBalance] = useState(null)
  const [shouldRerender, setShouldRerender] = useState(false);

  const [isModal, setModal] = useState(false)
  const [modalText, setModalText] = useState(false)

  const openModal = (text) => {
    setModalText(text)
    setModal(!isModal)
  }

  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCandleData();

  }, [selectedPair, minutes]);

  useEffect(() => {
    setPairHandle();

    let balance = window.localStorage.getItem(`options_crypto_balance_${singlePair.toLowerCase()}`);
    setFreeBalance(balance)
  }, [singlePair, selectedPair])

  const fetchCandleData = async () => {
    const time = {
      "1": "1m",
      "5": "5m",
      "15": "15m",
      "30": "30m",
      "60": "1h",
      "D": "1d",
    }

    const url2 = `https://api.binance.com/api/v1/klines?symbol=${selectedPair.replace(/\//g, "")}&interval=${time[minutes]}&limit=1`

    fetch(url2)
      .then(response => response.json())
      .then(data => {
        setPairFetchValue(data);
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
  }

  const getMinutes = (direction) => {
    resetErrors()
    setMinutes(direction);
  }

  const startBinary = () => {
    // console.log('singlePair :>> ', singlePair);
    // console.log('payout :>> ', payout);
    // console.log('pairFetchValue :>> ', pairFetchValue[0][4]);

    // console.log('minutes :>> ', minutes);
    // console.log('selectedPair :>> ', selectedPair);
    // console.log('investment :>> ', investment);
    // console.log('formTime :>> ', formTime);
    // console.log('upDownValue :>> ', upDownValue);

    let obj = {
      minutes: minutes,
      selectedPair: selectedPair,
      pairFetchValue: pairFetchValue,
      investment: investment,
      formTime: formTime,
      upDownValue: upDownValue,
    }

    if (investment === 0) {
      setErrors(['сумма не должна равняться 0'])
    } else if (investment > freeBalance) {
      setErrors(['сумма не должна быть более баланса'])
    } else {
      dispatch(setBinary(obj))
      openModal(t("Ваша ставка принята"))
      setShouldRerender(true)

      setTimeout(() => setShouldRerender(false), 0)
    }

  }

  const profitFormula = () => {
    if (pairFetchValue && pairFetchValue[0]) {
      const payoutCoefficient = parseFloat(percentCoefficient) / 100; // Преобразование коэффициента в число
      const candleCloseValue = parseFloat(pairFetchValue[0][4]);

      // Рассчитываем время ставки в часах
      const betTimeInHours = parseInt(formTime) / 60;

      // Рассчитываем потенциальный заработок и выплату с учетом времени и изменения цены
      const potentialProfit = (investment * payoutCoefficient * candleCloseValue) * betTimeInHours;

      let potentialPayout = null;

      if (upDownValue === 'up') {
        potentialPayout = investment + potentialProfit;
      } else {
        potentialPayout = investment - potentialProfit;
      }

      // console.log('Потенциальный заработок на повышение:', potentialProfit);
      // console.log('Потенциальная выплата на повышение:', potentialPayout);

      // // Добавим также вывод результатов в формате, аналогичном калькулятору Binance
      // console.log('Начальная маржа:', investment * candleCloseValue);
      // console.log('PNL:', potentialProfit);
      // console.log('ROI:', (potentialProfit / (investment * candleCloseValue)) * 100 + '%');

      setPayout(potentialPayout)
    }
  }

  const getInvestment = (investment) => {
    if (investment > freeBalance) {
      setErrors(['сумма не должна быть более баланса'])
    }

    // resetErrors()
    setInvestment(investment)
    profitFormula()
  }

  const getFormTime = (time) => {
    resetErrors()
    setFormTime(time)
    profitFormula()
  }

  const getUpAndDown = (time) => {
    resetErrors()
    setUpDownValue(time)
    profitFormula()
  }

  const trunc = (number) => {
    let precision = 3;
    let truncatedNumber = Math.trunc(number * Math.pow(10, precision)) / Math.pow(10, precision)

    return truncatedNumber
  }

  const setPairHandle = () => {
    setSinglePair(selectedPair.split("/")[0])
  }

  const resetErrors = () => {
    setErrors([])

  }



  const getBalance = (x) => {
    switch (singlePair) {
      case "ETH":
        return trunc(localStorage.getItem('crypto_deposit_eth'))
      case "BTC":
        return trunc(localStorage.getItem('crypto_deposit_btc'))
      case "USDT":
        return trunc(localStorage.getItem('crypto_deposit_usdt'))
    }
  }


  return (

    <div className="binary-wrapper">
      <div className="binary">
        <div className="binary-left">
          <BinaryHeader
            getMinutes={getMinutes}
            minutes={minutes}
          />

          <div className="binary-left-bottom">
            <div className="binary-left-auction">
              <Candle
                selectedPair={selectedPair}
                symbols={symbols}
                minutes={minutes}
              />
            </div>
          </div>
        </div>
        <div className="binary-right">
          <Transfer
            selectedPair={selectedPair}
            setSelectedPair={setSelectedPair}
            symbols={symbols}
          />

          <div>
            <InputFormTime
              getFormTime={getFormTime}
            />
            <InputFormValue
              getInvestment={getInvestment}
            />
          </div>



          <UpBet
            selectedPair={selectedPair}
            getBalance={getBalance}
            payout={payout}
            singlePair={singlePair}
            getUpAndDown={getUpAndDown}
          />

          <div
            className={`binary-right-bet-button active`}
            // onClick={() => profitFormula()}
            onClick={() => startBinary()}
          >
            <i>Start</i> <span><StartIcon /></span>
          </div>
          <br />
          {isErrors && isErrors.map((item, index) => <div key={index}>{t(item)}</div>)}
        </div>

        <ModalDialog modalState={isModal} setModalState={openModal} modalText={modalText}/>

      </div>
      <OptionsTable shouldRerender={shouldRerender}/>
    </div>

  )
}