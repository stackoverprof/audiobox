import { useState } from 'react';

const useForm = (format) => {
	const [state, setState] = useState(format);

	const form = state;

	const mutateForm = ({ target }) => {
		const { name, value, type, checked } = target;
		const getData = () => (type === 'checkbox' || type === 'radio' ? checked : value);
		setState((prev) => ({ ...prev, [name]: getData() }));
	};

	const setForm = (field, value) => {
		setState((prev) => ({ ...prev, [field]: value }));
	};

	const resetForm = () => {
		setState(format);
	};

	return { form, mutateForm, setForm, resetForm };
};

export default useForm;
