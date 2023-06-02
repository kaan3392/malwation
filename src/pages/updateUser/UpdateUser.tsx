import { useLocation } from "react-router-dom";
import { useStore } from "../../store";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingScreen from "../../components/Loading/Loading.tsx";
import { ArrowLeftIcon } from "../../svg/Svg";
import UpdateForm from "../../components/UpdateForm/UpdateForm.tsx";
import * as S from "./styled";

const UpdateUser = () => {
  const fetchSingleUser = useStore((state) => state.fetchSingleUser);
  const resetSingleUser = useStore((state) => state.resetSingleUser);

  const singleUser = useStore((state) => state.singleUser);
  const singleUserLoading = useStore((state) => state.singleUserLoading);
  const singleUserError = useStore((state) => state.singleUserError);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    fetchSingleUser(id);
    console.log("naber");
    console.log(id);

    return () => {
      resetSingleUser();
    };
  }, [id, fetchSingleUser, resetSingleUser]);

  console.log(singleUser);

  useEffect(() => {
    if (singleUserError) {
      toast.error(singleUserError.message as string);
      return;
    }
  }, [singleUserError?.message]);

  if (singleUserLoading) {
    return <LoadingScreen />;
  }

  if (singleUserError) {
    return <Toaster position="bottom-center" reverseOrder={false} />;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Back to={"/users"}>
          <ArrowLeftIcon />
          Back to Users
        </S.Back>
        <S.Title>Update User</S.Title>
        <UpdateForm />
      </S.Wrapper>
    </S.Container>
  );
};

export default UpdateUser;
