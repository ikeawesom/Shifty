import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState, FormEvent } from "react";
import { createNewMember } from "../libs/prisma/fetchMemberData";
import { useRouter } from "next/navigation";

export function useCreateMember() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [memberDetails, setMemberDetails] = useState({
    first_name: "",
    last_name: "",
    points: {
      disabled: true,
      points: 0,
    },
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useKindeBrowserClient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMemberDetails({ ...memberDetails, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      if (user === null)
        throw new Error(
          "Hmm.. looks like you do not have permission to do so. Please sign out and try again."
        );
      const { id: auth_id } = user;
      const {
        first_name,
        last_name,
        points: { points },
      } = memberDetails;
      const { error } = await createNewMember(
        first_name,
        last_name,
        points,
        auth_id
      );
      if (error) throw new Error(error);
      router.refresh();
      router.push(`members?${new URLSearchParams()}`);
    } catch (err: any) {
      const { message } = err;
      if (!message)
        setErrorMessage(
          "An unexpected errorMessage has occurred. Please try again later. We apologize for any inconvenience caused."
        );
      else setErrorMessage(message);
    }
    setLoading(false);
  };
  return {
    handleSubmit,
    handleChange,
    memberDetails,
    setMemberDetails,
    loading,
    errorMessage,
  };
}
