import axios from 'axios';
import { useState } from 'react';
import { BE_URL } from "../../../Config"
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { InputGroup } from "reactstrap";

export default function LoginModal({ model, toggle, registerToggle }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [cookies, setCookie] = useCookies()
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: user
    }).then((res) => {
      console.log("🚀 ~ handleSubmit ~ res:", res)
      setCookie("user", res.data.data)
      setCookie("token", res.data.token)
      toggle()
      setUser({
        email: "",
        password: ""
      })
      if (res.data.data.userType === "admin") navigate("/")
      else navigate("/")
      toast.success("login successfully..")
    }).catch((err) => {
      toast.error("You have not a account..please first do registration.")
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
          <Form onSubmit={handleSubmit}>
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
