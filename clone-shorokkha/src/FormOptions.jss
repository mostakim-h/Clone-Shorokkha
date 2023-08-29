import Form from "./Form";

const FormOptions = () => {
    return (
        <div className="from-options">

            <div className="title-bar">
                <h1>Vaccine Registration</h1>
            </div>

            <div className="form-options-container">
                <div className="from-options-left">
                    <button>National ID Card</button>
                    <button>Birth Reg. Certificate</button>
                    <button>Passport</button>
                </div>
                <div className="from-options-form-right">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default FormOptions;


