    
import * as Yup from "yup";

const validations = Yup.object().shape({
	ideaName: Yup
		.string()
		.required(),
	ideaDesc: Yup
		.string()
		.required(),
});

module.exports = validations;