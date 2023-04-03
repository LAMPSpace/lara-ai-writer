export type InputErrorProps = {
    message?: string[];
};
const InputError = ({ message = [] }: InputErrorProps) => {
    return (
        <>
            {message.length > 0 && (
                <>
                    {message.map((error, index) => (
                        <span className="invalid-feedback" role="alert" key={index}>
                            <strong>{error}</strong>
                        </span>
                    ))}
                </>
            )}
        </>
    );
};

export default InputError;
