import Form from '../components/Form'
import useRegisterForm from '../hooks/useRegisterForm'

export default function RegisterPage() {
    const {control, handleSubmit} = useRegisterForm()
    return (
        <Form handleSubmit={handleSubmit}>
            <Form.Title title="Register" />
            <Form.InputField
                control={control}
                name="username"
                label="Username"
                type="username"
                placeholder="Enter your username"
            />
            <Form.InputField
                control={control}
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
            />
            <Form.InputField
                control={control}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
            <Form.InputField
                control={control}
                name="confirmPassword"
                label="ConfirmPassword"
                type="password"
                placeholder="Enter your confirmPassword"
            />
            <Form.Button text="Submit" />
            <Form.NavLink
                text="Already have an account?"
                path="/auth/login"
                to="Login"
            />
        </Form>
    )
}
