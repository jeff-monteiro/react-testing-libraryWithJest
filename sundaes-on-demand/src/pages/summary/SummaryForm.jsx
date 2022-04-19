import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SummaryForm() {

  const [tcChecked, setTcChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{color: 'blue'}}>Terms and Conditions</span>
    </span>
  )
  return <div />
}