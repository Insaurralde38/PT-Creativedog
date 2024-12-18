import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import ErrorText from "@/components/atoms/ErrorText";

const FormGroup = ({ label, type, name, id, placeholder, error, value, onChange, onBlur }) => (
  <div className="mb-3">
    <Label htmlFor={id} className="form-label">
      {label}
    </Label>
    <Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="form-control"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <ErrorText className="text-danger">{error}</ErrorText>}
  </div>
);

export default FormGroup;