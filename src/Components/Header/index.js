import { createUser } from "../../API/createUser"
import { useForm } from "../../Hooks/useForm"
import { StyledHeader } from "./style"



export const CompHeader = (props) => {
    const { form, onChange, clearFields} = useForm({name: "", lastName: "", participation: 0})
    const newForm = {...form, participation: Number(form.participation)}

    const submitForm = async (event) => {
        event.preventDefault()
        props.addNewUser(newForm)
        createUser(newForm)
        clearFields()
        return newForm
    }

    return(
        <StyledHeader>
            <form onSubmit={submitForm}>
                <input 
                    placeholder='Name' 
                    type="text"
                    required
                    value={form.name}
                    name={"name"}
                    onChange={onChange}
                />
                <input 
                    placeholder='Last name' 
                    type="text"
                    required
                    value={form.lastName}
                    name={"lastName"}
                    onChange={onChange}
                />
                <input 
                    placeholder='Participation' 
                    type="text"
                    required
                    value={form.participation}
                    name={"participation"}
                    onChange={onChange}
                />
                <button type={'submit'}>SEND</button>
            </form>
        </StyledHeader>
    )
} 