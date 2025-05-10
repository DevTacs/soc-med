import Form from '../components/Form'

export default function RegisterPage() {
    return (
        <Form>
            <Form.Title title="Register" />
            <Form.InputField
                control="username"
                name="username"
                label="Username"
                type="username"
                placeholder="Enter your username"
            />
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
            <Form.Button text="Submit" />
            <Form.NavLink
                text="Already have an account?"
                path="/auth/login"
                to="Login"
            />
        </Form>
    )
}
