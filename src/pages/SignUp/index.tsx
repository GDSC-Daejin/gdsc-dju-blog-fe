import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return <div>SIGNUP</div>;
};

export default SignUp;
