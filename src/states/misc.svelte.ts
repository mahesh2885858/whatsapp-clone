let renderNewContactForm = $state(false);

export const shouldRenderNewContactForm = () => renderNewContactForm;

export const setRenderNewContactForm = (value: boolean) => {
	renderNewContactForm = value;
};
