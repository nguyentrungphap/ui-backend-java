import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    TextInput,
    Create,
    NumberInput,
    DateInput,
  } from "react-admin";
export const listUser =(props)=> (
    <List{...props}>
    <Datagrid >
        <TextField source='id' />
        <TextField source='fullname' />
        <TextField source='email' />
        <TextField source='phone_number' />
        <TextField source='address' />
        <TextField source='password' />
        <TextField source='created_at' />
        <TextField source='updated_at' />
        <EditButton />
    </Datagrid>
    </List>
)

export const editUser =(props)=> (
    <Edit{...props}>
    <SimpleForm>
    <TextInput source='fullname' />
    <TextInput source='email' />
    <NumberInput
        source='phone_number'
        validate={value => {
            if (!/^\d{10}$/.test(value)) {
                return 'Số điện thoại phải có 10 chữ số.';
            }
            return null;
        }}
    />
    <TextInput source='address' />
    <TextInput source='password' />
    <DateInput source='created_at' />
    <DateInput source='updated_at' />
    <NumberInput source='deleted' />
</SimpleForm>

    </Edit>
)

export const createUser =(props)=> (
    <Create{...props}>
    <SimpleForm>
    <TextInput source='fullname' />
    <TextInput source='email' />
    <NumberInput
        source='phone_number'
        validate={value => {
            if (!/^\d{10}$/.test(value)) {
                return 'Số điện thoại phải có 10 chữ số.';
            }
            return null;
        }}
    />
    <TextInput source='address' />
    <TextInput source='password' />
    <DateInput source='created_at' />
    <DateInput source='updated_at' />
    <NumberInput source='deleted' />
</SimpleForm>

    </Create>
)
