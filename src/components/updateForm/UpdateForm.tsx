import * as S from "./styled";
import FormItem from "../FormItem/FormItem.tsx";
import SelectOfRole from "../SelectOfRole/SelectOfRole.tsx";
import Button from "../Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(15),
  phone: z.string().min(3).max(15),
  role: z.string().min(3).max(8),
  active: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const UpdateForm = () => {
  const singleUser = useStore((state) => state.singleUser);
  const updateUser = useStore((state) => state.updateUser);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: singleUser?.email,
      name: singleUser?.name,
      phone: singleUser?.phone,
      role: singleUser?.role,
      active: singleUser?.active,
    },
    resolver: zodResolver(schema),
  });

  const handleUpdate = (id: string, user: FormValues) => {
    if (singleUser) {
      updateUser(id, user);
    }

    navigate("/users");
  };

  return (
    <S.UpdateForm
      onSubmit={handleSubmit((user) =>
        handleUpdate(singleUser?.id as string, user)
      )}
    >
      <S.InputContainer>
        <FormItem
          {...register("name")}
          label="name"
          placeholder="name"
          defaultValue={singleUser?.name}
          error={errors.name?.message}
        />
        <FormItem
          {...register("email")}
          label="mail"
          placeholder="mail"
          defaultValue={singleUser?.email}
          error={errors.email?.message}
        />
      </S.InputContainer>
      <S.InputContainer>
        <FormItem
          {...register("phone")}
          label="phone"
          placeholder="phone"
          defaultValue={singleUser?.phone}
          error={errors.phone?.message}
        />
        <SelectOfRole
          {...register("role")}
          label="role"
          defaultValue={singleUser?.role}
          error={errors.role?.message}
        />
      </S.InputContainer>
      <S.ActiveContainer>
        <Controller
          control={control}
          name="active"
          render={({ field }) => {
            console.log("*", field);
            return (
              <S.ActiveButton
                ref={field.ref}
                onClick={() => field.onChange(!field.value)}
                active={field.value}
              >
                <div />
              </S.ActiveButton>
            );
          }}
        />
      </S.ActiveContainer>
      <Button type="submit">Update User</Button>
    </S.UpdateForm>
  );
};

export default UpdateForm;
