import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const handleLogIn =(event)=> {
		//validate there is an email
		//validate there is a password
		const success = actions.logIn({
			email:email,
			password: password
		});
		if (success) navigate("/profile")
	}
	return (
		<div className="text-center mt-5">
			<form>
				<input 
						type="text" 
						placeholder="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}/>
				<input 
						type="password" 
						placeholder="password" 
						value={password}
						onChange={(event) => setPassword(even.target.value)}/>
				<button type= "button" onClick={handleLogIn}>submit</button>
			</form>
		</div>
	);
};
