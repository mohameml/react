import "./SubmitVue.css";

export default function SubmitVue({ setVisible, forms }) {
    let valide = false;
    let res = "";
    if ((forms.phoneNumber.length < 8) | (forms.phoneNumber.length > 12)) {
        res = "The format of phone number is incorect";
    } else if ((forms.age < 20) | (forms.age > 100)) {
        res = "age must be between 20 and 100";
    } else {
        res = "The form has been submitted successfully";
        valide = true;
    }

    function handelClick() {
        setVisible(false);
    }

    return (
        <>
            (
            <div className="vue" onClick={handelClick}>
                <div
                    className="info"
                    style={{ color: valide ? "green" : "red" }}
                >
                    <p>{res}</p>
                </div>
            </div>
            )
        </>
    );
}
