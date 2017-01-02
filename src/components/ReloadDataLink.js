import React, { PropTypes } from 'react';

const ReloadDataLink = ({
  reloadType,
  selectedCity,
  onReload
}) => {

  let reloadLinkStyle = {
    color: !selectedCity ? 'gray' : '',
    textDecoration: 'none'
  }

  return (
    <div>
      <a href="javascript:void(0)"
         style={reloadLinkStyle}
         onClick={()=> onReload(selectedCity)}>重新讀取</a>
    </div>
  );
};

ReloadDataLink.propTypes = {
  reloadType: PropTypes.string.isRequired,
  selectedCity: PropTypes.string.isRequired,
  onReload: PropTypes.func.isRequired
};

export default ReloadDataLink;
