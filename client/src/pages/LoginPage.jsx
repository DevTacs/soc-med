import Form from '../components/Form'

export default function LoginPage() {
    return (
        <Form>
            <Form.Title title="Login" />
            <Form.InputField
                control="email"
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
            />
            <Form.InputField
                control="password"
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
