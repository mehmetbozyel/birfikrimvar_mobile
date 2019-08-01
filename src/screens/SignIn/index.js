import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SignInForm from './SignInForm';


export default class SignIn extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title> Giriş Yap </Title>
					</Body>
				</Header>
				<SignInForm />
			</React.Fragment>
		);
	}
}