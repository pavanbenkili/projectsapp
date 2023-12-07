import './index.css'

const TabItem = props => {
  const {tabDetails,onChangingTab,activeTab} = props
  const {displayText,tabId} = tabDetails

  const activeClass = activeTab===tabId?`active-tab-btn`:''

  console.log(activeTab)

  const tabChange = ()=>{
    onChangingTab(tabId)
  }
  return (
    <li className={`tab-item-container`} >
      <button type="button" className={`tab-btn ${activeClass}`} onClick={tabChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
