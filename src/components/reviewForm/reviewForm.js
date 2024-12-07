import { Form, Button } from 'react-bootstrap'

const reviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {
  return (
    
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.controlTexarea1'>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} rows={3} defaultValue={defaultValue}/>
        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>

  )
}

export default reviewForm