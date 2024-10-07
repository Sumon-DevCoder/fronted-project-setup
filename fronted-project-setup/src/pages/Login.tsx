/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "0001",
  //     password: "admin12345",
  //   },
  // });

  const defaultValues = {
    id: "0001",
    password: "admin12345",
  };

  const [login, { data, error }] = useLoginMutation();

  console.log("data", data);
  console.log("error", error);

  const onSubmit = async (data: FieldValues) => {
    // logging in
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res?.data?.accessToken) as TUser; // set user in store

      dispatch(setUser({ user: user, token: res?.data?.accessToken })); // set token in store

      // logged in
      toast.success("Logged In", { id: toastId, duration: 2000 });

      navigate(`/${user?.role}/dashboard`);
    } catch (err) {
      // error
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
