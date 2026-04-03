import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/slice/userSlice";

const Login = () => {
  const [email, setEmail] = useState("lalit@gmail.com");
  const [password, setPassword] = useState("Admin#123");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const { data: res } = await axios.post(
        "http://13.61.189.101:5000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      if (res?.success) {
        dispatch(addUser(res?.data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-[80vh]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
