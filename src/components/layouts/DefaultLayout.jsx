import { Card } from "react-bootstrap"


const DefaultLayout = (props) => {
    const children = props.children;

    return (
        <>
        <main>
        <div className="container my-5">
            <Card>
                <main>{children}</main>
            </Card>
        </div>
        </main>
        </>
    );
}

export default DefaultLayout