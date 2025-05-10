import {Link} from 'react-router-dom'
import {useController} from 'react-hook-form'
import ErrorLabel from './ErrorLabel'

export default function Form({children, handleSubmit}) {
    return (
        <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-[350px] flex flex-col py-4 px-8 shadow-sm shadow-accent rounded-md">
            {children}
        </form>
    )
}

Form.Title = ({title}) => {
    return <h2 className="text-2xl font-bold m-4 text-center">{title}</h2>
}

Form.InputField = ({control, name, label, type = 'text', placeholder}) => {
    const {
        field,
        fieldState: {error},
    } = useController({control, name})
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <ErrorLabel error={error?.message} />
            <input
                {...field}
                type={type}
                className="input"
                placeholder={placeholder}
            />
        </fieldset>
    )
}

Form.Button = ({text}) => {
    return <button className="btn btn-accent mt-4">{text}</button>
}

Form.NavLink = ({path, to, text}) => {
    return (
        <p className="label mt-4">
            {text}
            <Link to={path}>
                <span className="text-accent underline">{to}</span>
            </Link>
        </p>
    )
}
