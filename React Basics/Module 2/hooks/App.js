import InputComponent from "./Textfield";
import RegisterForm from "./SignUp";
import React, { useState } from 'react';

function App() {
    return (
        <div className="App">
            <h1>Task: Create a controlled input field</h1>
            <InputComponent />
            <RegisterForm />
        </div>
    );
};

export default App;
