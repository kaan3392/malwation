import { useLocation } from "react-router-dom";
import { useStore } from "../../store";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingScreen from "../../components/Loading/Loading";
import { ArrowLeftIcon } from "../../svg/Svg";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import * as S from "./styled";

const UpdateUser = () => {
  const fetchSingleUser = useStore((state) => state.fetchSingleUser);
  const resetSingleUser = useStore((state) => state.resetSingleUser);

  const singleUserLoading = useStore((state) => state.singleUserLoading);
  const singleUserError = useStore((state) => state.singleUserError);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    fetchSingleUser(id);

    return () => {
      resetSingleUser();
    };
  }, [id, fetchSingleUser, resetSingleUser]);

  useEffect(() => {
    if (singleUserError) {
      toast.error(singleUserError.message as string);
      return;
    }
  }, [singleUserError?.message]);

  if (singleUserLoading) {
    return (
      <S.Container>
        <LoadingScreen />
      </S.Container>
    );
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
