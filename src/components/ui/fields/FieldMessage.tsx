import React from 'react';

interface IProps {
    message: string;
}

const FieldMessage: React.FC<IProps> = (props) => {
    const {message} = props;
    return <p className={'field-message field-error-message'}>{message}</p>;
};
export default FieldMessage;
