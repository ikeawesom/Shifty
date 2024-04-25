import React, { useEffect, useState } from "react";
import { MemberType } from "../constants";
import { getMemberData } from "../libs/prisma/fetchMemberData";

export default function useFetchMember(member: string) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [memberDetails, setMemberDetails] = useState<MemberType>();

  const handleMembers = async () => {
    setLoading(true);
    try {
      const { data, error } = await getMemberData(member);
      if (error) throw new Error(error);
      setMemberDetails(data);
    } catch (error: any) {
      const { message } = error;
      if (!message)
        setErrorMessage(
          "An unexpected errorMessage has occurred. Please try again later. We apologize for any inconvenience caused."
        );
      else setErrorMessage(message);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (member !== "") handleMembers();
  }, []);

  return { loading, memberDetails, errorMessage };
}
