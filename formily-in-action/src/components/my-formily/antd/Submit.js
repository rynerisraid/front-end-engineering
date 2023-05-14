import { useParentForm } from "@/which";

export default function Submit({
  onClick,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailed,
  children,
  ...otherProps
}) {
  const form = useParentForm();

  return (
    <button
      onClick={(e) => {
        if (onSubmit) {
          form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed);
        }
      }}
    >
      Submit
    </button>
  );
}
