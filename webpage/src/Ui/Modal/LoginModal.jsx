import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { InputGroup } from "reactstrap";
export default function LoginModal({ model, toggle, registerToggle }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const addUser = (e) => {
    e.preventDefault()
    console.log("---->", user)
    setUser({
      email: "",
      password: ""
    })
  }

  function createAcoount() {
    toggle();
    registerToggle()
  }

  return (
    <div>
      <Modal isOpen={model} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={addUser}>
            <FormGroup>
              <Label >Email</Label>
              <Input 
                placeholder='Enter your Email'
                type="Email"
                value={user.email}
                name="Email"
                id="Email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <InputGroup>
                <Input
                  className="shadow-none"
                  placeholder='Enter your password'
                  name="password"
                  value={user.password}
                  id="password"
                  onChange={(e) => setUser({ ...user, password: e?.target?.value })}

                />
              </InputGroup>
            </FormGroup>
            <p role="button" onClick={createAcoount}>
              Don't have an account? <span className="font-semibold text-red-500">Create account...!</span>
            </p>
            <br />
            <button className="border-2 border-black rounded-md hover:bg-black hover:text-white p-1 w-full">
              Login
            </button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
