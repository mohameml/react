//
import { useState } from "react";
import "./Forms.css";
import SubmitVue from "../ReponseVue/SubmitVue";

function Forms() {
    const initiForms = {
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: "less than 500$",
    };
    const [forms, setForms] = useState(initiForms);

    const [disable, setDisable] = useState(true);
    const [classBtn, setClassBtn] = useState("btn");

    const [showSubmitVue, setShowSubmitVue] = useState(false);

    function handelChange(e) {
        setForms({
            ...forms,
            [e.target.name]: e.target.value,
        });
    }

    function handelSubmit(e) {
        e.preventDefault();
        console.log(forms);
    }

    function handelBlur() {
        if (
            (forms.name !== "") &
            (forms.phoneNumber !== "") &
            (forms.age !== "")
        ) {
            setClassBtn(() => "btn-valide ");
            setDisable(() => false);
        } else {
            setClassBtn(() => "btn");
            setDisable(() => true);
        }
    }

    function handelClick() {
        setShowSubmitVue(true);
    }

    return (
        <>
            <div className="forms">
                <h1>Requesting a Loan</h1>
                <hr />
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={forms.name}
                            onChange={handelChange}
                            onBlur={handelBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={forms.phoneNumber}
                            onChange={handelChange}
                            onBlur={handelBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={forms.age}
                            onChange={handelChange}
                            onBlur={handelBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor="empl">Are you an employee?</label>
                        <input
                            type="checkbox"
                            id="empl"
                            name="isEmployee"
                            checked={forms.isEmployee}
                            onChange={(e) =>
                                setForms({
                                    ...forms,
                                    isEmployee: e.target.checked,
                                })
                            }
                        />
                    </div>
                    <div>
                        <p className="label-selec">Salary</p>
                        <select
                            value={forms.salary}
                            onChange={handelChange}
                            name="salary"
                        >
                            <option>less than 500$</option>
                            <option>between 500$ and 1000$</option>
                            <option>more 1000$</option>
                        </select>
                    </div>
                    <div className="submit">
                        <button
                            className={classBtn}
                            disabled={disable}
                            onClick={handelClick}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {showSubmitVue && (
                <SubmitVue forms={forms} setVisible={setShowSubmitVue} />
            )}
        </>
    );
}

export default Forms;
