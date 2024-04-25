import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { MemberType } from "../constants";
import handleResponses, { resType } from "../libs/handleResponses";
import { getMemberData } from "../libs/prisma/fetchMemberData";
import { fetchUserMembers } from "../libs/prisma/fetchUserData";

export function useMembers() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const { user } = useKindeBrowserClient();

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const [members, setMembers] = useState<MemberType[]>();

  const fetchMembers = async (auth_id: string) => {
    try {
      setLoading(true);
      const {
        data: { members },
        error,
      } = await fetchUserMembers(auth_id);
      if (error) throw new Error(error);

      let membersArr = [] as MemberType[];
      const membersIdsArr = members as string[];

      const arrPromise = membersIdsArr.map(async (id: string) => {
        const { data, error } = await getMemberData(id);
        if (error) return handleResponses({ status: false, error });
        return handleResponses({ data });
      });

      const resolvedArr = await Promise.all(arrPromise);

      resolvedArr.forEach((item: resType) => {
        if (!item.status) throw new Error(error);
        membersArr.push(item.data);
      });

      console.log(membersArr);

      if (query !== "") {
        // handle query
        membersArr = membersArr.filter((member: MemberType) => {
          const full_name = `${member.first_name} ${member.last_name}`;
          return full_name.includes(query);
        });
      }

      setMembers(membersArr);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user === null) return;

    setTimeout(() => {
      const { id: auth_id } = user;
      fetchMembers(auth_id);
    }, 200);
  }, [query, user]);

  return { loading, members, query, onQueryChange };
}
