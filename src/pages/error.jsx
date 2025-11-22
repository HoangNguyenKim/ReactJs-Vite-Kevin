import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Oops!</h1>
            <p>Sorry, an expected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link
                style={{
                    padding: "10px 20px",
                    backgroundColor: 'blue',
                    color: "white",
                    textDecoration: 'none'
                }}
                to="/"
            >
                Go to Home Page
            </Link>
        </div>

    );
}
