import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { ReactComponent as OkIcon } from '../../assets/icons/OkIcon.svg'
import { getRisks } from '../../toolkitReducers/actions.slice'

export default function Table(params) {
  const risks = useSelector(state => state.state.risks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRisks())
  }, [dispatch])

  return (
    <table className="algorithms-history__table-body">
      <tbody>
        <tr className="algorithms-history__table-heading-row rel">
          <th>
            <div className="algorithms-history__table-td-wrapper">
              <span>Дата</span>
            </div>
          </th>

          <th>
            <div className="algorithms-history__table-td-wrapper">
              <span>
                Сумма пибыли
              </span>
            </div>
          </th>

          <th>
            <div className="algorithms-history__table-td-wrapper">
              <span>
                Доход дня
              </span>
            </div>
          </th>
        </tr>

        {/* <tr className="algorithms-history__table-body-row">
          <td>03.10.2020</td>
          <td>296.55 USDT</td>
          <td>296.55 USDT</td>
          <td>0.00998268 ETH</td>
          <td>
            <a href="#" className="link algorithms-history__table-body-row-link">
              <span>
                <OkIcon />
              </span>

              <span>Подробно</span>
            </a>
          </td>
        </tr> */}
        {/* date : "2023-09-13" id : 1 profit : "12.50" risk : "50.00" user : 3 */}
        {
          risks?.map((risk, index) => (
            <tr key={index} className="algorithms-history__table-body-row">
              <td>{risk.date}</td>
              <td>{risk.profit}USD</td>
              <td>{risk.risk}%</td>
              {/* <td>{risk.user}</td> */}
              {/* <td>
              <a href="#" className="link algorithms-history__table-body-row-link">
                <span>
                  <OkIcon />
                </span>

                <span>Подробно</span>
              </a>
            </td> */}
            </tr>
          ))
        }
      </tbody>
    </table>


  )
}