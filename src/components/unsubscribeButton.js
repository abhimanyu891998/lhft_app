import React from 'react'
import { Button } from 'react-bootstrap'

const UnsubscribeButton = (props) => (
  <div>
    <Button variant="danger" onClick={props.onClick}>Unsubscribe from Updates</Button>
  </div>
)

export default UnsubscribeButton