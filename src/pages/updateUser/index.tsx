import * as S from "./styled";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "../../store";
import z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormItem from "../../components/formItem";
import Button from "../../components/button";
import SelectOfRole from "../../components/selectOfRole";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../svg/Svg";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(15),
  phone: z.string().min(3).max(15),
  role: z.string().min(3).max(8),
  active: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const UpdateUser = () => {
  const fetchSingleUser = useStore((state) => state.fetchSingleUser);
  const resetSingleUser = useStore((state) => state.resetSingleUser);
  const updateUser = useStore((state) => state.updateUser);
  const singleUser = useStore((state) => state.singleUser);
  const updateUserError = useStore((state) => state.updateUserError);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleUser(id);
    return () => {
      resetSingleUser();
    };
  }, [id, fetchSingleUser, resetSingleUser]);

  console.log(singleUser);

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
    if (updateUserError) {
      toast.error(updateUserError.message);
    }
    navigate("/users");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Back to={"/users"}>
          <ArrowLeftIcon />
          Back to Users
        </S.Back>
        <S.Title>Update User</S.Title>
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
              render={({ field}) => {
                console.log("*",field);
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
        <Toaster position="bottom-center" reverseOrder={false} />
      </S.Wrapper>
    </S.Container>
  );
};

export default UpdateUser;
