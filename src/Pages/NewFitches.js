import {useParams, useLocation, useNavigate}  from 'react-router-dom'

export default function New() {
    const {params} = useParams()
    const navigate = useNavigate()

    console.log('navigate', navigate)
    console.log('useNavigate()', useNavigate())
    console.log('useLocation', useLocation())
    console.log('params', params)
  return (
    <div>New</div>
  )
}
