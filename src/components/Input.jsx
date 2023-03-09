export const Input = ({forhtml, text, type, name, onChange}) =>{
    return(
        <label htmlFor={forhtml}>
            <input
                type={type}
                name={nombre}
                id={nombre}
                className="border-2"
                onChange={onInputNameChange}
            />
        </label>
    );
};