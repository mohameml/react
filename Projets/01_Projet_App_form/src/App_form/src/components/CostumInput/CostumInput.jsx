
export default function CostumInput(props) {

    const {label , value , handelChange , handelBlur} = props ;


    return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input
            type="text"
            id="name"
            name="name"
            value={value}
            onChange={handelChange}
            onBlur={handelBlur}
        />
        
    </div>
  )
}
