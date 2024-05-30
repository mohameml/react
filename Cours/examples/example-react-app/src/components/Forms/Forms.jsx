import { useState } from "react";

export default function Forms() {
    //   const [name, setName] = useState("");
    //   const [email, setEmail] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: "",
        comment: "",
        isStudent: false,
        country: "",
        status: "",
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(form);
            }}
        >
            <label htmlFor="name">Name</label>
            <input
                value={form.name}
                type="text"
                id="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
                value={form.email}
                type="text"
                id="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br />
            <label htmlFor="age">Age:</label>
            <input
                value={form.age}
                type="text"
                id="age"
                onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
            <br />
            <label htmlFor="comment"></label>
            <textarea
                id="comment"
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
            >
                {form.comment}
            </textarea>
            <br />
            <label htmlFor="student">Are you Student:</label>
            <input
                type="checkbox"
                id="student"
                checked={form.isStudent}
                onChange={(e) => {
                    setForm({
                        ...form,
                        isStudent: e.target.checked,
                    });
                }}
            />
            <br />
            <select
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
            >
                <option>MAURITANIE</option>
                <option>KSA</option>
                <option>EGYPTE</option>
                <option>FRANCE</option>
            </select>
            <br />
            <br />
            <div>
                <input
                    value={"Student"}
                    type="radio"
                    checked={form.status === "Student" ? true : false}
                    onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                    }
                />
                Student
                <input
                    value={"Teacher"}
                    type="radio"
                    checked={form.status === "Teacher" ? true : false}
                    onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                    }
                />
                Teacher
                <input
                    value={"prof"}
                    type="radio"
                    checked={form.status === "prof" ? true : false}
                    onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                    }
                />
                prof
            </div>
            <button>Submit</button>
        </form>
    );
}
