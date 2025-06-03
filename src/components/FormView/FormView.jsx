import { useContext } from "react";
import FormCtx from "../../context/formContext";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/utils";
import AvatarUploader from "../AvatarUploader/AvatarUploader";
import Input from "../Input/Input";
import styles from "./styles.module.css";

function FormView() {
  const {
    formData,
    setFormData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({ email: "", name: "", gitUser: "", file: null }, validate);

  const { setFormValues } = useContext(FormCtx);

  const handleAvatarChange = (imgData) => {
    setFormData((prev) => ({
      ...prev,
      file: imgData,
    }));
  };

  const onSubmit = (data) => {
    setFormValues((prev) => ({
      ...prev,
      ...data,
      isSubmited: true,
      ticket: "016009",
    }));
  };

  return (
    <div>
      <h1 className="title">
        Your Journey to Coding <br />
        Conf 2025 Starts Here!{" "}
      </h1>
      <h4 className="subtitle">
        Secure your spot at next year's biggest coding conference.
      </h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formTicket}
        noValidate
      >
        <AvatarUploader
          label="Upload Avatar"
          image={formData.file}
          setImage={handleAvatarChange}
          errorMsg={errors.file}
        />

        <Input
          label="Full Name"
          type="text"
          touched={touched.name}
          errorMsg={errors.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.name}
        />
        <Input
          label="Email Address"
          type="email"
          touched={touched.email}
          errorMsg={errors.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="example@email.com"
          value={formData.email}
        />
        <Input
          label="GitHub Username"
          type="text"
          touched={touched.gitUser}
          errorMsg={errors.gitUser}
          name="gitUser"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="@yourusername"
          value={formData.gitUser}
        />
        <button>Generate My Ticket</button>
      </form>
    </div>
  );
}

export default FormView;
