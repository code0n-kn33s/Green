import { ReactComponent as OkIcon } from '../../assets/icons/OkIcon.svg'


// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//   ];


export default function Table(params) {
    return (
        <table className="algorithms-history__table-body">
        <tbody>
        <tr className="algorithms-history__table-heading-row rel">
          <th>
            <div className="algorithms-history__table-td-wrapper">
               <span>Дата создания</span>
            </div>
          </th>

          <th>
            <div className="algorithms-history__table-td-wrapper">
              <span>
                Сумма
              </span>
            </div>
          </th>

          <th>
            <div className="algorithms-history__table-td-wrapper">
              <span>
               Прибыль за период
              </span>
            </div>
          </th>

          <th>
            <div className="algorithms-history__table-td-wrapper">
              <span>
                Прибыль за период
              </span>
            </div>
          </th>

          <th>
            <div className="algorithms-history__table-td-wrapper"></div>
          </th>
        </tr>

        <tr className="algorithms-history__table-body-row">
          <td>03.10.2020</td>
          <td>296.55 USDT</td>
          <td>296.55 USDT</td>
          <td>0.00998268 ETH</td>
          <td>
            <a href="#" className="link algorithms-history__table-body-row-link">
              <span>
                <OkIcon/>
              </span>

              <span>Подробно</span>
            </a>
          </td>
        </tr>
        <tr className="algorithms-history__table-body-row">
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
        </tr>
        <tr className="algorithms-history__table-body-row">
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
        </tr>
        <tr className="algorithms-history__table-body-row">
          <td>03.10.2020</td>
          <td>296.55 USDT</td>
          <td>296.55 USDT</td>
          <td>0.00998268 ETH</td>
          <td>
            <a href="#" className="link algorithms-history__table-body-row-link">
              <span>
                <OkIcon/>
              </span>

              <span>Подробно</span>
            </a>
          </td>
        </tr>
        <tr className="algorithms-history__table-body-row">
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
        </tr>
        </tbody>
      </table>


    )
}