import React, { useEffect } from 'react'

const Component404 = () => {

  useEffect(() => {
    window.location.href = window.location.origin
  }, []);

  return <></>
}

export default Component404
