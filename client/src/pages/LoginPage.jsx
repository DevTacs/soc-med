import Form from '../components/Form'
import useLoginForm from '../hooks/useLoginForm'

export default function LoginPage() {
    const {control, handleSubmit} = useLoginForm()
    return (
        <Form handleSubmit={handleSubmit}>
            <Form.Title title="Login" />
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
            <Form.Button text="Login" />
            <Form.NavLink
                text="Don't have an account?"
                path="/auth/register"
                to="Register"
            />
        </Form>
    )
}
