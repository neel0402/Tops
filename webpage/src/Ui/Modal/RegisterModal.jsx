import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { InputGroup } from "reactstrap";

const intialData = {
    name: "",
    email: "",
    number: "",
    age: "",
    gender: "",
    password: "",
    confirmpassword: ""
}

const intialadress = {
    add: "",
    city: "",
    pincode: "",
    state: ""
}

export default function RegisterModal({ model, toggle, login }) {
    const [newUser, setNewUser] = useState(intialData);
    const [adress, setAdress] = useState(intialadress);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("====>", newUser, adress)
        setNewUser(intialData);
        setAdress(intialadress);
        toggle();
    }

    function SignIn() {
        login();
        toggle();
    }
    return (
        <div>
            <Modal isOpen={model} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <b>Registration Form</b>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                className="shadow-none"
                                placeholder='Enter Your Name'
                                value={newUser.name}
                                type="text"
                                id="Name"
                                onChange={(e) => setNewUser({ ...newUser, name: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                className="shadow-none"
                                type="email"
                                value={newUser.email}
                                name="email"
                                id="email"
                                onChange={(e) => setNewUser({ ...newUser, email: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">Number</Label>
                            <Input
                                className="shadow-none"
                                type="number"
                                name="number"
                                value={newUser.number}
                                onChange={(e) => setNewUser({ ...newUser, number: e?.target?.value })}
                                id="number"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input
                                type="number"
                                name="age"
                                value={newUser.age}
                                className="shadow-none"
                                onChange={(e) => setNewUser({ ...newUser, age: e?.target?.value })}
                                id="age"
                            >
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="gender">Gender</Label>
                            <div className="flex gap-3">
                                <FormGroup className="flex gap-2">
                                    <Input
                                        checked={newUser.gender === "male"}
                                        type="radio"
                                        value="male"
                                        onChange={(e) => setNewUser({ ...newUser, gender: e?.target?.value })}
                                    />
                                    <Label>Male</Label>
                                </FormGroup>
                                <FormGroup className="flex gap-2">
                                    <Input
                                        checked={newUser.gender === "female"}
                                        type="radio"
                                        value="female"
                                        onChange={(e) => setNewUser({ ...newUser, gender: e?.target?.value })}

                                    />
                                    <Label>Female</Label>
                                </FormGroup>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="adress">Address </Label>
                            <Input
                                type="text"
                                name="adress"
                                value={adress.add}
                                className="shadow-none"
                                id="adress"
                                onChange={(e) => setAdress({ ...adress, add: e?.target?.value })}
                            >
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                                type="text"
                                name="city"
                                value={adress.city}
                                className="shadow-none"
                                onChange={(e) => setAdress({ ...adress, city: e?.target?.value })}
                                id="city"
                            >
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="pincode">Pincode</Label>
                            <Input
                                type="number"
                                name="pincode"
                                value={adress.pincode}
                                className="shadow-none"
                                onChange={(e) => setAdress({ ...adress, pincode: e?.target?.value })}
                                id="city"
                            >
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input
                                type="text"
                                name="state"
                                value={adress.state}
                                className="shadow-none"
                                onChange={(e) => setAdress({ ...adress, state: e?.target?.value })}
                                id="city"
                            >
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <InputGroup>
                                <Input
                                    type='password'
                                    className="shadow-none"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setNewUser({ ...newUser, password: e?.target?.value })}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmpassword">ConfirmPassword</Label>
                            <InputGroup>
                                <Input
                                    type='password'
                                    className="shadow-none"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setNewUser({ ...newUser, confirmpassword: e?.target?.value })}

                                />
                            </InputGroup>
                        </FormGroup>
                        <p role="button">
                            You have already account? <span className="font-semibold text-red-500" onClick={SignIn}>Sign In</span>
                        </p>
                        <br />
                        <button className="border-2 border-black rounded-md hover:bg-black hover:text-white p-1 w-full">
                            Register
                        </button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
