import React from 'react'

const StatusTag = ({status}) => {
  if(status !== undefined){
    switch(status[0]) {
      case 'IN_PROGRESS':
        return (<span className="status-tag status-tag--progress">In Progress</span>)
      case 'ARCHIVED':
        return (<span className="status-tag status-tag--archived">Archived</span>)
      default:
        return (<span></span>)
    }
  } else{
    return (<span></span>)
  }
}

export default StatusTag