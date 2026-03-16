

function ErrorMessage({ message }) {
    return (
        <div style={{ color: "red", padding: "20px" }}>
            <h3>Error</h3>
            <p>{message}</p>
        </div>
    )
}